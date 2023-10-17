import { Container, useTheme, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import axonImg from '../../assets/images/axon.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import AboutSteps from './AboutSteps';
import AboutPress from './AboutPress';
import AboutBannerPrimary, { ABOUT_BANNER_PRIMARY_ID } from './AboutBannerPrimary';
import AboutBannerSecondary from './AboutBannerSecondary';
import AboutStaff from './AboutStaff';
import AboutFAQs, { ABOUT_FAQS_PRIMARY_ID } from './AboutFAQs';
import AboutCredits from './AboutCredits';
import AboutPressQuote from './AboutPressQuote';
import KnowBeforeYouGo from './KnowBeforeYouGo';

/**
 * The primary component for below-the-fold content.
 */
const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* <AboutPressQuote /> */}
      <AboutBannerPrimary />
      
      <Container id={ABOUT_BANNER_PRIMARY_ID} maxWidth="lg" sx={{ marginTop: 5 }} children={<><AboutBannerSecondary /><AboutSteps /></>} />
      <KnowBeforeYouGo />
      <Container id="staff" maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutStaff />} />
      <Container
        id={ABOUT_FAQS_PRIMARY_ID}
        maxWidth="lg"
        sx={{ marginTop: 5, paddingTop: 5, borderTop: `30px solid ${theme.palette.secondary.main}` }}
        children={<AboutFAQs />}
      />
      {/* <HeroImage
        src={axonImg}
        sx={{ marginTop: 4 }}
        borderTop={`30px solid ${theme.palette.secondary.main}`}
        borderBottom={`30px solid ${theme.palette.secondary.main}`}
      /> */}
      {/* <Container maxWidth="lg" sx={{ marginTop: 5 }} children={<AboutCredits />} /> */}
      <AboutPress />
    </>
  );
};

export default About;
