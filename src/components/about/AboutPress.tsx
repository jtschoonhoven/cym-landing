import { Button, Link, Typography } from '@mui/material';
import React from 'react';
import Bold from '../typography/Bold';
import H2 from '../typography/H2';
import Oblique from '../typography/Oblique';

export const ABOUT_PRESS_ID = 'press-info';

/**
 * Press info.
 */
const AboutPress: React.FC = () => {
  return (
    <>
      <H2 id={ABOUT_PRESS_ID}>Press Info</H2>
      <Typography variant="body1">
        <Bold>Change Your Mind </Bold>
        is the first production by artist collective <Bold>[Say Nothing and Leave] </Bold>
        to be made available to the general public. Born in the seedy underbelly of the Bay Area's underground immersive
        theater scene, Change Your Mind offers a rare opportunity to witness the gritty, transgressive performance style
        that is unique to San Francisco. We are proud to be located on Haight St., the spiritual home of our favorite
        brand of radical and unusual "art."
      </Typography>
      <Typography variant="body1">
        This immersive performance explores themes of identity and consciousness. Participants are subjected to
        psychologically intense stimuli and difficult choices. No matter which choice they make, they will certainly{' '}
        <Oblique>change their mind</Oblique>.
      </Typography>
      <Typography variant="body1">
        Change Your Mind includes 1-1 interactions between participants and performers, binaural audio, 1-way mirrors,
        unscripted moments, branching narrative, and, in one scene, all of these simultaneously. The result is
        heartbreaking, intense, and ultimately, uplifting.
      </Typography>
      <Typography variant="body1">
        To get in touch, please email{' '}
        <Link href="mailto:sayhi@saynothingandleave.com">sayhi@saynothingandleave.com</Link>.
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <Link href="mailto:sayhi@saynothingandleave.com">
          <Button variant="contained" size="large">
            Send us an email
          </Button>
        </Link>
      </Typography>
    </>
  );
};

export default AboutPress;
