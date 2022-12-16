import {
  Container,
  Typography,
  useTheme,
  Unstable_Grid2 as Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Link,
} from '@mui/material';
import React from 'react';
import phrenologyImg from '../../assets/images/phrenology.jpg';
import eyeImg from '../../assets/images/eye.svg';
import staffImg from '../../assets/images/staff.svg';
import brainImg from '../../assets/images/brain.svg';
import heartImg from '../../assets/images/heart.svg';
import axonImg from '../../assets/images/axon.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import AboutCard from './AboutCard';
import H1 from '../typography/H1';
import H2 from '../typography/H2';
import Subtitle1 from '../typography/Subtitle1';
import Bold from '../typography/Bold';
import Oblique from '../typography/Oblique';
import AboutSteps from './AboutSteps';
import AboutPress from './AboutPress';

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <H1 variant="h1" component="h2" sx={{ marginTop: 10 }}>
          The New Science of Personality Editing
        </H1>
        <Grid container sx={{ marginTop: 6 }} spacing={3}>
          <Grid md={3} sm={6}>
            <AboutCard imgSrc={heartImg} title="Safe" />
          </Grid>
          <Grid md={3} sm={6}>
            <AboutCard imgSrc={staffImg} title="Professional" />
          </Grid>
          <Grid md={3} sm={6}>
            <AboutCard imgSrc={brainImg} title="Scientific" />
          </Grid>
          <Grid md={3} sm={6}>
            <AboutCard imgSrc={eyeImg} title="Lorem Ipsum" />
          </Grid>
        </Grid>
      </Container>
      <HeroImage
        src={phrenologyImg}
        borderTop={`10px solid ${theme.palette.secondary.dark}`}
        borderBottom={`10px solid ${theme.palette.grey[700]}`}
      >
        <Subtitle1>
          <Bold>Change Your Mind </Bold>is the world's first clinic to offer fully custom personality adjustments. Our
          experimental technology unlocks rapid and dramatic changes in identity, habits, anxiety, agreeableness, and
          much more. All from the comfort of our luxurious San Francisco clinic. For less than the cost of a single
          session of traditional talk therapy, you can have a brand new personality—in days instead of months.
        </Subtitle1>
      </HeroImage>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <AboutSteps />
      </Container>
      <HeroImage
        src={axonImg}
        borderTop={`10px solid ${theme.palette.secondary.dark}`}
        borderBottom={`10px solid ${theme.palette.grey[700]}`}
      />
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <AboutPress />
      </Container>
    </>
  );
};

export default About;
