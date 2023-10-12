import { useTheme } from '@mui/material';
import React from 'react';
import Bold from '../typography/Bold';
import Subtitle1 from '../typography/Subtitle1';
import HeroImage from '../util/hero-image/HeroImage';
import phrenologyImg from '../../assets/images/phrenology.jpg';

/**
 * A secondary banner in the below-the-fold content.
 */
const AboutBannerSecondary: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <HeroImage
        src={phrenologyImg}
        borderTop={`20px solid ${theme.palette.secondary.main}`}
        borderBottom={`30px solid ${theme.palette.grey[700]}`}
      >
        <Subtitle1>
          <Bold>Change Your Mind </Bold>is the world's first clinic to offer fully custom personality adjustments. Our
          experimental technology unlocks rapid and dramatic changes in identity, habits, anxiety, agreeableness, and
          much more, all from the comfort of our luxurious San Francisco clinic. For less than the cost of a single
          session of traditional talk therapy, you can have a brand new personality—in days instead of months.
        </Subtitle1>
      </HeroImage>
    </>
  );
};

export default AboutBannerSecondary;
