const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sharp = require('sharp');
const findFiles = require('file-regex');
const cliProgress = require('cli-progress');
const crypto = require('crypto');
// const discordHook = require('./discord');
const { execSync } = require('child_process');
const { Box2, Vector2 } = require('three');

const branchName = execSync(
    'git rev-parse --symbolic-full-name --abbrev-ref HEAD'
).toString();

console.log('[GIT BRANCH]', branchName);

const hash = (buffer) =>
    crypto.createHash('sha256').update(buffer).digest('hex');

let lastRunHashes = {},
    currentHashes = {};

if (fs.existsSync('.automation-hashes')) {
    lastRunHashes = JSON.parse(
        fs.readFileSync('.automation-hashes').toString()
    );
}

const configuration = YAML.parse(
    fs.readFileSync('./automation.yml').toString()
);

const cliArgs = process.argv.slice(1);

const cliFlags = new Set(
    cliArgs.filter((arg, i) => i > 0 && arg.startsWith('--'))
);
const cliTargets = cliArgs.filter((arg, i) => i > 0 && !arg.startsWith('--'));
let runs = Object.keys(configuration);
if (cliTargets.length) runs = runs.filter((r) => cliTargets.indexOf(r) > -1);
runs = runs.filter((r) => r in configuration);
runs = new Set(runs);

if (runs.has('deploy')) runs.add('build');

// TODO implement watcher

// TODO implement github actions
// TODO implement dist

// order matters
const runners = {
    metadata,
    prepare,
    outputCode,
    build,
    deploy,
};

runs.add('outputCode');

const codeOutputs = {};
let activeProgressBar;

const tempPath = './temp/';

run();

async function run() {
    if (fs.existsSync(tempPath)) {
        fs.rmSync(tempPath, { recursive: true });
    }
    fs.mkdirSync(tempPath);

    activeProgressBar = new cliProgress.SingleBar(
        {
            format: '{runner} {bar} {path} | {step} {action} {file}...',
            barsize: 8,
        },
        cliProgress.Presets.shades_classic
    );

    let maxProgress = runs.size + 1;

    runs.forEach((r) => {
        if (r in runners && configuration[r] instanceof Array) {
            maxProgress += configuration[r].length;
        }
    });

    activeProgressBar.start(maxProgress, 0, {
        runner: 'INIT',
        step: 'starting',
        action: '',
        path: '',
        file: '',
    });

    for (let runner in runners) {
        if (runs.has(runner)) {
            // console.log('[RUN]', runner);
            activeProgressBar.update({
                runner,
                step: 'starting',
                action: '',
                path: '',
                file: '',
            });
            await runners[runner]();
            activeProgressBar.increment();
        }
    }

    if (!cliFlags.has('dry')) {
        activeProgressBar.update({
            runner: 'applying',
            step: 'moving',
            action: '',
            path: '',
            file: '',
        });
        const tempPaths = await findFiles(tempPath, /.*?/, 50);

        tempPaths.forEach((f) => {
            try {
                fs.mkdirSync(f.dir.replace('temp/', '').replace('temp\\', ''), {
                    recursive: true,
                });
            } catch {}
            fs.renameSync(
                f.dir + '/' + f.file,
                f.dir.replace('temp/', '').replace('temp\\', '') + '\\' + f.file
            );
        });

        if (Object.keys(currentHashes).length) {
            fs.writeFileSync(
                '.automation-hashes',
                JSON.stringify(currentHashes)
            );
        }
    }

    activeProgressBar.update(maxProgress);
    activeProgressBar.stop();

    console.log('[DONE]');

    setImmediate(() => {
        process.exit(0);
    });
}

async function outputCode() {
    for (let file in codeOutputs) {
        // console.log('[CODE:WRITE] writing', file);
        activeProgressBar.update({
            runner: 'outputting code',
            step: file,
            action: '',
            path: '',
            file: '',
        });
        fs.mkdirSync(tempPath + path.dirname(file).replace('./', ''), {
            recursive: true,
        });
        fs.writeFileSync(tempPath + file, codeOutputs[file]);
    }
}

async function metadata() {
    console.log('[GENERATE] app.webmanifest');
    fs.writeFileSync(
        tempPath + 'assets/app.webmanifest',
        `
{
  "name": "${configuration.metadata.name}",
  "short_name": "${configuration.metadata.name}",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "${configuration.metadata.primaryColor}",
  "background_color": "${configuration.metadata.backgroundColor}",
  "icons": [
    {
      "src": "/assets/temp-logo.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/assets/temp-icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}`
    );
}

async function prepare() {
    // console.log(configuration.prepare);

    for (let prepStep of configuration.prepare) {
        const outputs = [];

        let files = [],
            expression;

        if (prepStep.blob) {
            expression = new RegExp(prepStep.blob.replace('^', ''), 'i');
            files = await findFiles(
                prepStep.path,
                expression,
                prepStep.recursive ? 10 : 0
            );
            files.forEach(a => {
                if (prepStep.recursive) {
                    a.relative = a.dir.replace(path.resolve('./'+prepStep.path), '').replace(/\\/g, '/') +'/'+ a.file;
                } else {
                    a.relative = a.file
                }
            });
            files.sort((a, b) => (a.file > b.file ? 1 : -1));

            files.forEach((f) => {
                f.hash = hash(fs.readFileSync(f.dir + '/' + f.file));
                currentHashes[f.file] = f.hash;
                f.isDirty =
                    f.file in lastRunHashes
                        ? lastRunHashes[f.file] !== f.hash
                        : true;
            });
        }

        activeProgressBar.update({
            path: prepStep.path,
            step: prepStep.process || 'codeOutput',
        });
        activeProgressBar.increment();

        if (prepStep.process === 'image') {
            await prepareImages(prepStep, files, expression);
        } else if (prepStep.codeOutput) {
            // TODO make generic codeOutput logic consistent
            for (let codeType of prepStep.codeOutput.include) {
                if (codeType === 'list') {
                    addCodeOutput(
                        prepStep.codeOutput.path,
                        `export const ${
                            prepStep.codeOutput.prefix
                        }Files = ${JSON.stringify(files.map((f) => f.relative))};`
                    );
                } else if (codeType === 'outputPath') {
                    addCodeOutput(
                        prepStep.codeOutput.path,
                        `export const ${
                            prepStep.codeOutput.prefix
                        }Path = ${JSON.stringify(prepStep.path + '/')};`
                    );
                }
            }
        } else {
            console.warn(
                '[PREPARE:WARN] prepare step has unknown process',
                prepStep
            );
        }
    }
}

async function prepareImages(prepStep, files, expression) {
    const replacerRegex = /\$([\w\d]+?)/g;
    let replacerMaker = (replacementGroups) => (g, g1) =>
        replacementGroups[g1 === 'file' ? 0 : g1] || g;
    let spriteSheetGroupings = {};

    for (let f of files) {
        activeProgressBar.update({ file: f.relative });
        f.match = f.relative.match(expression);
        f.sharp = sharp(f.dir + '/' + f.file);
        f.metadata = await f.sharp.metadata();
        if (prepStep.resize) {
            activeProgressBar.update({ action: 'resize' });
            // console.log('[PREPARE:RESIZE]', f.file);
            if (prepStep.resize.maxWidth) {
                f.sharp = f.sharp.rotate().resize(
                    Math.min(prepStep.resize.maxWidth, f.metadata.width)
                );
            } else if (prepStep.resize.divide) {
                f.sharp = f.sharp.rotate().resize(
                    Math.round(f.metadata.width / prepStep.resize.divide)
                );
            }

            // TODO idk how i feel about direct metdata manipulation...
            f.metadata.width = Math.round(
                f.metadata.width / prepStep.resize.divide
            );
            f.metadata.height = Math.round(
                f.metadata.height / prepStep.resize.divide
            );
        }

        const replacer = replacerMaker(f.match);
        if (prepStep.spritesheet) {
            f.spritesheetData = {
                name: prepStep.spritesheet.name.replace(
                    replacerRegex,
                    replacer
                ),
                action: prepStep.spritesheet.action.replace(
                    replacerRegex,
                    replacer
                ),
                number: prepStep.spritesheet.number.replace(
                    replacerRegex,
                    replacer
                ),
            };

            spriteSheetGroupings[f.spritesheetData.name] =
                spriteSheetGroupings[f.spritesheetData.name] || [];
            spriteSheetGroupings[f.spritesheetData.name].push(f);
        } else {
            const outputPath = prepStep.output.replace(replacerRegex, replacer);
            if (prepStep.convert) {
                activeProgressBar.update({ action: 'convert' });
                // console.log('[PREPARE:CONVERT]', f.file, outputPath);
                f.sharp = f.sharp[prepStep.convert](); // TODO add lossless as option
                f.file = path.basename(outputPath);
                f.relative = path.dirname(f.relative) +'/'+ path.basename(outputPath);
            }

            try {
                fs.mkdirSync(
                    tempPath + path.dirname(outputPath).replace('./', ''),
                    { recursive: true }
                );
            } catch {}
            if (f.isDirty) {
                await f.sharp.toFile(tempPath + outputPath.replace('./', ''));
            }
        }
    }

    prepStep.checks?.forEach((check) => {
        if (check === 'uniform') {
            for (let f of files) {
                const { width, height } = f.metadata;

                if (width !== height) {
                    fatalError(
                        '[PREPARE:ERROR]',
                        f.file,
                        'has failed uniformity check',
                        '(' + width + ', ' + height + ')'
                    );
                }
            }
        } else if ('consistentSize' in check) {
            let comparisonSizes = {};

            for (let f of files) {
                const consistencyKey = check.consistentSize.replace(
                    replacerRegex,
                    replacerMaker(f.match)
                );
                if (!comparisonSizes[consistencyKey])
                    comparisonSizes[consistencyKey] = f.metadata;

                if (
                    f.metadata.width !==
                        comparisonSizes[consistencyKey].width ||
                    f.metadata.height !== comparisonSizes[consistencyKey].height
                ) {
                    fatalError(
                        '[PREPARE:ERROR]',
                        f.file,
                        'has failed consistency check',
                        `(w${comparisonSizes[consistencyKey].width} <> ${f.metadata.width} | h${comparisonSizes[consistencyKey].height} <> ${f.metadata.height})`
                    );
                }
            }
            check.consistentSize;
        } else {
            console.warn('[PREPARE:WARN] unable to perform check', check);
        }
    });

    let spriteSheetOutputData = {};
    for (spritesheet in spriteSheetGroupings) {
        // console.log('[PREPARE] creating spritesheet for', spritesheet);
        activeProgressBar.update({ file: spritesheet, action: 'spritesheet' });
        const group = (spriteSheetGroupings[spritesheet] = spriteSheetGroupings[
            spritesheet
        ].sort((a, b) =>
            a.spritesheetData.action + a.spritesheetData.number >
            b.spritesheetData.action + b.spritesheetData.number
                ? 1
                : -1
        ));

        const outputPath = prepStep.output.replace(
            replacerRegex,
            replacerMaker(group[0].match)
        );
        const outputFile = path.basename(outputPath);
        const outputKey = path.basename(outputPath, path.extname(outputPath));

        spriteSheetOutputData[outputKey] = { actions: {} };
        let isSheetDirty = false;

        let totalWidth = 0,
            totalHeight = 0;

        let currentAction = null;
        let rowWidth = 0;
        for (f of group) {
            if (f.isDirty) isSheetDirty = true;
            if (f.spritesheetData.action !== currentAction) {
                currentAction = f.spritesheetData.action;
                totalHeight += f.metadata.height;
                rowWidth = 0;
            }

            rowWidth += f.metadata.width;
            totalWidth = Math.max(rowWidth, totalWidth);
        }

        spriteSheetOutputData[outputKey].totalWidth = totalWidth;
        spriteSheetOutputData[outputKey].totalHeight = totalHeight;

        spriteSheetOutputData[outputKey].spriteWidth = group[0].metadata.width;
        spriteSheetOutputData[outputKey].spriteHeight =
            group[0].metadata.height;

        spriteSheetOutputData[outputKey].rows =
            spriteSheetOutputData[outputKey].totalHeight /
            spriteSheetOutputData[outputKey].spriteHeight;
        spriteSheetOutputData[outputKey].columns =
            spriteSheetOutputData[outputKey].totalWidth /
            spriteSheetOutputData[outputKey].spriteWidth;

        let sheet = sharp({
            create: {
                width: totalWidth,
                height: totalHeight,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 },
            },
        });

        let x = 0,
            y = 0;
        let tileX = 0,
            tileY = 0;
        currentAction = null;
        const composites = [];
        for (f of group) {
            if (f.spritesheetData.action !== currentAction) {
                if (currentAction !== null) {
                    y += f.metadata.height;
                    tileY++;
                }
                currentAction = f.spritesheetData.action;
                spriteSheetOutputData[outputKey].actions[currentAction] = [];
                x = 0;
                tileX = 0;
            }

            if (isSheetDirty) {
                composites.push({
                    input: await f.sharp.toBuffer(),
                    top: y,
                    left: x,
                });
            }

            spriteSheetOutputData[outputKey].actions[currentAction].push({
                x,
                y,
                tileX,
                tileY,
            });

            x += f.metadata.width;
            tileX++;
        }

        try {
            fs.mkdirSync(
                tempPath + path.dirname(outputPath).replace('./', ''),
                {
                    recursive: true,
                }
            );
        } catch {}

        if (isSheetDirty) {
            await sheet
                .composite(composites)
                .webp({ lossless: true })
                .toFile(tempPath + outputPath);
        }
    }

    if (prepStep.codeOutput) {
        for (let codeType of prepStep.codeOutput.include) {
            if (codeType === 'list') {
                addCodeOutput(
                    prepStep.codeOutput.path,
                    `export const ${
                        prepStep.codeOutput.prefix
                    }Files = ${JSON.stringify(
                        Object.keys(spriteSheetOutputData).length
                            ? Object.keys(spriteSheetOutputData).map(
                                  (f) => f + '.' + prepStep.spritesheet.format
                              )
                            : files.map((f) => f.relative)
                    )} as const;`
                );
            } else if (codeType === 'metadata') {
                const filesMetadata = {};

                for (let f of files) {
                    filesMetadata[f.relative] = await sharp( tempPath + path.dirname(prepStep.output) + f.relative).metadata();
                }

                addCodeOutput(
                    prepStep.codeOutput.path,
                    `export const ${
                        prepStep.codeOutput.prefix
                    }Metadata = ${JSON.stringify(
                        filesMetadata
                    )};`
                );
            } else if (codeType === 'outputPath') {
                addCodeOutput(
                    prepStep.codeOutput.path,
                    `export const ${
                        prepStep.codeOutput.prefix
                    }Path = ${JSON.stringify(
                        path.dirname(prepStep.output).replace('./', '') + '/'
                    )};`
                );
            } else if (codeType === 'boundingBox' || codeType.boundingBox) {
                const boundingBoxes = {};
                for (let f of files) {
                    boundingBoxes[path.basename(f.file, path.extname(f.file))] =
                        codeType.floodFill
                            ? await getHitboxes(f)
                            : await getBoundingBox(f);
                }
                addCodeOutput(
                    prepStep.codeOutput.path,
                    `export const ${
                        prepStep.codeOutput.prefix
                    }BoundingBoxes = ${JSON.stringify(boundingBoxes)};`
                );
            } else if (codeType === 'spritesheet') {
                addCodeOutput(
                    prepStep.codeOutput.path,
                    `export const ${
                        prepStep.codeOutput.prefix
                    }Spritesheet = ${JSON.stringify(spriteSheetOutputData)};`
                );
            }
        }
    }
}

async function getHitboxes(f, boxSize = 16) {
    activeProgressBar.update({ file: f.file, action: 'getBoundingBox' });
    try {
        const { data } = await f.sharp
            .raw()
            .toBuffer({ resolveWithObject: true });
        const { width, height } = f.metadata;

        /** @type Array<Box2> */
        const boxes = [];

        for (let y = 0; y < height; y += boxSize) {
            for (let x = 0; x < width; x += boxSize) {
                const pixel = data[y * width * 4 + x * 4 + 3]; // Assuming alpha channel is the last byte

                if (pixel !== 0) {
                    boxes.push(
                        new Box2().setFromCenterAndSize(
                            new Vector2(x - width / 2, y - height / 2),
                            new Vector2(boxSize, boxSize)
                        )
                    );
                }
            }
        }
        // activeProgressBar.stop();
        // console.log(boxes);
        // process.exit();

        return boxes
            .filter((b) => !boxes.find((b2) => b2 !== b && b2.containsBox(b)))
            .map((b) => {
                const size = b.getSize(new Vector2());
                const center = b.getCenter(new Vector2());

                return {
                    x: center.x,
                    y: center.y,
                    width: size.x,
                    height: size.y,
                };
            });
    } catch (error) {
        console.error('Error processing image:', error);
        return null;
    }
}

async function getBoundingBox(f) {
    // console.log('[PREPARE:getBoundingBox]', f.file);
    activeProgressBar.update({ file: f.file, action: 'getBoundingBox' });
    try {
        const { data } = await f.sharp
            .raw()
            .toBuffer({ resolveWithObject: true });
        const { width, height } = f.metadata;

        // Assuming RGBA format, adjust if different
        const stride = width * 4;

        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const offset = y * stride + x * 4 + 3; // Alpha channel offset
                if (data[offset] > 0) {
                    // Pixel is not transparent
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }

        if (minX === width || minY === height) {
            console.log('image totally transparent?', imagePath);
            return null; // Image is completely transparent
        }

        return {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1,
        };
    } catch (error) {
        console.error('Error processing image:', error);
        return null;
    }
}

async function build() {
    for (let target of configuration.build) {
        if (target instanceof Object) {
            for (let subTarget in target) {
                for (let option of target[subTarget]) {
                    await buildTarget(subTarget, option);
                }
            }
        } else if (typeof target === 'string') {
            await buildTarget(target);
        } else {
            console.warn('[BUILD:WARN] unsupported build type?', target);
        }
    }
}

async function buildTarget(name, option) {
    activeProgressBar.update({
        path: name,
        step: 'running',
    });
    switch (name) {
        case 'webpack':
            await buildWebpack();
            break;
        default:
            console.warn('[BUILD:WARN]', name, 'not supported');
    }
}

async function buildWebpack() {
    const child = exec('npm run build');
    try {
        // child.child.stdout.pipe(process.stdout);
        // child.child.stderr.pipe(process.stderr);

        await child;
    } catch (e) {
        fatalError('[BUILD:ERROR] webpack failed\n', (await child).stdout);
    }
}

function addCodeOutput(path, code) {
    codeOutputs[path] = (codeOutputs[path] || '') + code + '\n\n';
}

async function deploy() {
    for (let target of configuration.deploy) {
        if (target === 'sprixle.studio') {
            if (configuration.build?.indexOf('webpack') === -1) {
                fatalError(
                    '[DEPLOY:ERROR]',
                    'deploy to sprixle.studio requires webpack build'
                );
            }

            await exec(
                `aws s3 sync ./dist/ s3://sprixle.studio/${branchName}/`
            );
            await exec(
                `aws cloudfront create-invalidation --distribution-id E1YZKM4Z4BHII4  --paths "/*"`
            );

            await discordHook.success(
                'Deployment',
                'success ' + branchName,
                'https://sprixle.studio/' + branchName
            );
        } else {
            console.warn('[BUILD:WARN] unsupported build type?', target);
        }
    }
}

function fatalError(...args) {
    console.error(...args);
    process.exit(1);
}
