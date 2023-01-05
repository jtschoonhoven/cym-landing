import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { useTheme } from '@mui/material';
import H2 from '../typography/H2';

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
        borderTop={`50px solid ${theme.palette.grey[900]}`}
        borderBottom={`50px solid ${theme.palette.grey[900]}`}
      >
        <H2>The New Science of Personality Editing</H2>
        <Subtitle1 sx={{ marginTop: 0 }}>
          Change Your Mind is the leading provider of cosmetic personality adjustments. So you can be the person you're
          truly meant to be.
        </Subtitle1>
      </HeroImage>
    </>
  );
};

export default AboutBannerPrimary;
