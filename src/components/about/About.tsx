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
import KnowBeforeYouGo from './KnowBeforeYouGo';

import instagramIcon from '../../assets/images/instagram.webp';
import facebookIcon from '../../assets/images/facebook.png';
import snalIcon from '../../assets/images/snal-logo-footer.jpg';
import { COLORS } from '../../providers/ThemeProvider';

/**
 * The primary component for below-the-fold content.
 */
const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* <AboutPressQuote /> */}
      <AboutBannerPrimary />

      <Container
        id={ABOUT_BANNER_PRIMARY_ID}
        maxWidth="lg"
        sx={{ marginTop: 5 }}
        children={
          <>
            <AboutBannerSecondary />
            <AboutSteps />
          </>
        }
      />
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
      <div
        className="footer"
        style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: COLORS.raisin, padding: '12px' }}
      >
        <span>
          <a
            style={{ marginRight: '12px' }}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100090089625646"
          >
            <img width={32} src={facebookIcon} />
          </a>
          <a target="_blank" href="https://www.instagram.com/cym.show/">
            <img width={32} src={instagramIcon} />
          </a>
        </span>
        <a
          target="_blank"
          href="https://saynothingandleave.com/"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '16px',
            font: 'Prompt, Arial',
            color: COLORS.white,
            textDecoration: 'none',
            justifyContent:'center'
          }}
        >
          a production by <img style={{marginLeft: '8px'}} src={snalIcon} />
        </a>
      </div>
    </>
  );
};

export default About;
