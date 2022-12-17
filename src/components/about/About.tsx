import { Container, useTheme, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import axonImg from '../../assets/images/axon.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import AboutSteps from './AboutSteps';
import AboutPress from './AboutPress';
import AboutIcons from './AboutIcons';
import AboutBannerPrimary from './AboutBannerPrimary';
import AboutBannerSecondary from './AboutBannerSecondary';

/**
 * The primary component for below-the-fold content.
 */
const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <AboutBannerPrimary />
      <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutSteps />} />
      <AboutBannerSecondary />
      {/* <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutIcons />} /> */}
      {/* <HeroImage
        src={axonImg}
        borderTop={`30px solid ${theme.palette.secondary.dark}`}
        borderBottom={`30px solid ${theme.palette.grey[700]}`}
      /> */}
      <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutPress />} />
    </>
  );
};

export default About;
