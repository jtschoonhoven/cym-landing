import { Container, useTheme, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import axonImg from '../../assets/images/axon.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import AboutSteps from './AboutSteps';
import AboutPress from './AboutPress';
import AboutBannerPrimary from './AboutBannerPrimary';
import AboutBannerSecondary from './AboutBannerSecondary';
import AboutStaff from './AboutStaff';
import AboutFAQs, { ABOUT_FAQS_PRIMARY_ID } from './AboutFAQs';
import AboutCredits from './AboutCredits';
import AboutPressQuote from './AboutPressQuote';

/**
 * The primary component for below-the-fold content.
 */
const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* <AboutPressQuote /> */}
      <AboutBannerPrimary />
      <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutSteps />} />
      <AboutBannerSecondary />
      {/* <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutIcons />} /> */}
      <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutStaff />} />
      <Container
        id={ABOUT_FAQS_PRIMARY_ID}
        maxWidth="lg"
        sx={{ marginTop: 5, paddingTop: 5, borderTop: `30px solid ${theme.palette.secondary.dark}` }}
        children={<AboutFAQs />}
      />
      <HeroImage
        src={axonImg}
        sx={{ marginTop: 4 }}
        borderTop={`30px solid ${theme.palette.secondary.dark}`}
        borderBottom={`30px solid ${theme.palette.grey[700]}`}
      />
      {/* <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutCredits />} /> */}
      <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutPress />} />
    </>
  );
};

export default About;
