import { useTheme } from '@mui/material';
import React from 'react';
import Bold from '../typography/Bold';
import Subtitle1 from '../typography/Subtitle1';
import Subtitle2 from '../typography/Subtitle2';
import HeroImage from '../util/hero-image/HeroImage';
import phrenologyImg from '../../assets/images/phrenology.jpg';
import {H3CutOut} from '../typography/H3';
import { COLORS } from '../../providers/ThemeProvider';

/**
 * A secondary banner in the below-the-fold content.
 */
const AboutBannerSecondary: React.FC = () => {
  const theme = useTheme();
  return (
    <>
        <H3CutOut sx={{fontSize:'3.25rem', lineHeight: '3.25rem', width: '100%', textAlign: 'center'}}>The New Science of Personality Editing</H3CutOut>
        <Subtitle2><Bold>Change Your Mind is the leading provider of cosmetic personality adjustments. So you can be the person you're truly meant to be.</Bold></Subtitle2>
        <Subtitle2 sx={{fontWeight: '400'}}>
          Change Your Mind is the world's first clinic to offer fully custom personality adjustments. Our
          experimental technology unlocks rapid and dramatic changes in identity, habits, anxiety, agreeableness, and
          much more, all from the comfort of our luxurious San Francisco clinic. For less than the cost of a single
          session of traditional talk therapy, you can have a brand new personality—in days instead of months.
        </Subtitle2>
        <Subtitle2>So how does it work?</Subtitle2>
    </>
  );
};

export default AboutBannerSecondary;
