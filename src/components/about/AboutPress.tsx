import AboutPressKit from './AboutPressKit';

export const ABOUT_PRESS_ID = 'press-info';

/**
 * Press info.
 */
// const AboutPress: React.FC = () => {
//   return (
//     <>
//       <H2 id={ABOUT_PRESS_ID}>Press Info</H2>
//       <Typography variant="body1">
//         <Bold>Change Your Mind </Bold>
//         is the first production by artist collective{' '}
//         <Link target="_blank" href="https://saynothingandleave.com">
//           <Bold>[Say Nothing and Leave] </Bold>
//         </Link>
//         to be made available to the general public. Born in the seedy underbelly of the Bay Area's underground immersive
//         theater scene, Change Your Mind offers a rare opportunity to witness the gritty, transgressive performance style
//         that is unique to San Francisco. We are proud to be located on Haight St., the spiritual home of our favorite
//         brand of radical and unusual "art."
//       </Typography>
//       <Typography variant="body1">
//         This immersive performance explores themes of identity and consciousness. Participants are subjected to
//         psychologically intense stimuli and difficult choices. No matter which choice they make, they will certainly{' '}
//         <Oblique>change their mind</Oblique>.
//       </Typography>
//       <Typography variant="body1">
//         Change Your Mind includes 1-1 interactions between participants and performers, binaural audio, 1-way mirrors,
//         unscripted moments, branching narrative, and, in one scene, all of these simultaneously. The result is
//         heartbreaking, intense, and ultimately, uplifting.
//       </Typography>
//       <Typography variant="body1">
//         To get in touch, please email{' '}
//         <Link href="mailto:press@saynothingandleave.com">press@saynothingandleave.com</Link>.
//       </Typography>
//       <Typography variant="body1" sx={{ textAlign: 'center' }}>
//         <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
//           <Link href="mailto:press@saynothingandleave.com">
//             <Button variant="contained" size="large">
//               Send us an email
//             </Button>
//           </Link>
//           <Link href="http://serve.saynothingandleave.com/share/vuP2XYlx" target="_blank">
//             <Button variant="contained" size="large">
//               Download press kit
//             </Button>
//           </Link>
//         </Stack>
//       </Typography>
//       {/* <AboutPressKit /> */}
//     </>
//   );
// };

import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { Box, Button, Container, Link, Stack, Typography, useTheme } from '@mui/material';
import H2 from '../typography/H2';
import { COLORS } from '../../providers/ThemeProvider';
import H3, { H3CutOut } from '../typography/H3';
import Subtitle2 from '../typography/Subtitle2';
import Bold from '../typography/Bold';
import Oblique from '../typography/Oblique';

export const ABOUT_BANNER_PRIMARY_ID = 'about';

const containerStyles = {
  background: COLORS.cyan,
  borderTop: `20px solid ${COLORS.magenta}`,
  padding: '16px 12px',
  // height: '50vh',
};

const wrapStyles: React.CSSProperties = {
  margin: '0px auto',
  maxWidth: '1100px',
};

const boxStyles: React.CSSProperties = {
  background: COLORS.yellow,
  // boxShadow: '0 0 3px rgba(0,0,0,0.6)',
  display: 'flex',
  flexDirection: 'row',
  margin: '20px 0',
  padding: '16px 16px',
};

/**
 * The lead banner in the below-the-fold content section.
 */
const AboutPress: React.FC = () => {
  const theme = useTheme();
  return (
    <div id={ABOUT_PRESS_ID} style={containerStyles}>
      <div style={wrapStyles}>
        <H3CutOut
          sx={{
            boxShadow: '0 0 3px rgba(0,0,0,0.6)',
            fontStyle: 'italic',
            fontSize: '3.25rem',
            lineHeight: '3.25rem',
            textAlign: 'center',
            margin: '20px 0',
            marginBottom: '32px',
          }}
        >
          Press Info
        </H3CutOut>
        <div style={boxStyles}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <Typography variant="body1">
              <Bold>Change Your Mind </Bold>
              is the first production by artist collective{' '}
              <Link target="_blank" href="https://saynothingandleave.com">
                <Bold>[Say Nothing and Leave] </Bold>
              </Link>
              to be made available to the general public. Born in the seedy underbelly of the Bay Area's underground
              immersive theater scene, Change Your Mind offers a rare opportunity to witness the gritty, transgressive
              performance style that is unique to San Francisco. We are proud to be located on Haight St., the spiritual
              home of our favorite brand of radical and unusual "art."
            </Typography>
            <Typography variant="body1">
              This immersive performance explores themes of identity and consciousness. Participants are subjected to
              psychologically intense stimuli and difficult choices. No matter which choice they make, they will
              certainly <Oblique>change their mind</Oblique>.
            </Typography>
            <Typography variant="body1">
              Change Your Mind includes 1-1 interactions between participants and performers, binaural audio, 1-way
              mirrors, unscripted moments, branching narrative, and, in one scene, all of these simultaneously. The
              result is heartbreaking, intense, and ultimately, uplifting.
            </Typography>
            <Typography variant="body1">
              To get in touch, please email{' '}
              <Link href="mailto:press@saynothingandleave.com">press@saynothingandleave.com</Link>.
            </Typography>
          </div>
        </div>

        <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Link href="mailto:press@saynothingandleave.com">
            <Button variant="contained" size="large">
              Send us an email
            </Button>
          </Link>
          <Link href="http://serve.saynothingandleave.com/share/vuP2XYlx" target="_blank">
            <Button variant="contained" size="large">
              Download press kit
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default AboutPress;
