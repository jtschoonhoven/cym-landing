import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { Link, useTheme } from '@mui/material';
import H2 from '../typography/H2';
import { COLORS } from '../../providers/ThemeProvider';

export const ABOUT_BANNER_PRIMARY_ID = 'about';

/**
 * The lead banner in the below-the-fold content section.
 */
const AboutBannerPrimary: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <HeroImage
        id={ABOUT_BANNER_PRIMARY_ID}
        src={ripplesImg}
        sx={{ marginTop: 0 }}
        height="500px"
        borderTop={`50px solid ${COLORS.raisin}`}
      >
        <H2>The New Science of Personality Editing</H2>
        <Subtitle1 sx={{ marginTop: 0 }}>
          Change Your Mind is the leading provider of cosmetic personality adjustments. So you can be the person you're
          truly meant to be.
        </Subtitle1>

        <Subtitle1 color="white" bgColor={theme.palette.primary.main} sx={{ paddingTop: 5, margin: 0, fontStyle: 'italic', display: 'block' }}>
          “Gets right what much immersive theater gets wrong”
        </Subtitle1>

        <Subtitle1 color="white" bgColor={theme.palette.primary.main} sx={{ margin: 0 }}>
          <Link
            target="_blank"
            style={{ textDecoration: 'underline', color: 'white' }}
            href="https://datebook.sfchronicle.com/theater/immersive-theater-psych-experiment-personality-17896462#spotim-comments"
          >
            — SF Chronicle
          </Link>
        </Subtitle1>
      </HeroImage>
    </>
  );
};

export default AboutBannerPrimary;
