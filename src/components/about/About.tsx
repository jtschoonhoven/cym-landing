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

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <H1 variant="h1" component="h2" sx={{ marginTop: 10 }}>
          The New Science of Personality Editing
        </H1>
        <Grid container sx={{ marginTop: 6 }} spacing={3}>
          <Grid sm={3} xs={6}>
            <AboutCard imgSrc={heartImg} title="Safe" />
          </Grid>
          <Grid sm={3} xs={6}>
            <AboutCard imgSrc={staffImg} title="Professional" />
          </Grid>
          <Grid sm={3} xs={6}>
            <AboutCard imgSrc={brainImg} title="Scientific" />
          </Grid>
          <Grid sm={3} xs={6}>
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
        <H2>Press Info</H2>
        <Typography variant="body1">
          <Bold>Change Your Mind </Bold>
          is the first production by artist collective <Bold>[Say Nothing and Leave] </Bold>
          to be made available to the general public. Born in the seedy underbelly of the Bay Area's underground
          immersive theater scene (which is a real thing), Change Your Mind offers a rare opportunity to witness the
          gritty, transgressive performance style that is unique to San Francisco. We are proud to be located on Haight
          St., the spiritual home of our favorite brand of radical and unusual "art."
        </Typography>
        <Typography variant="body1">
          This immersive performance explores themes of identity, consciousness, and mental health, and it is not subtle
          about any of these. Participants are subjected to psychologically intense stimuli and difficult choices. No
          matter which choice they make, they will certainly <Oblique>change their mind</Oblique>.
        </Typography>
        <Typography variant="body1">
          Change Your Mind includes 1-1 interactions between participants and performers, binaural audio, 1-way mirrors,
          deep faked video, personality exams, flashing lights, unscripted moments, branching narrative, and, in one
          scene, all of these simultaneously. The result is heartbreaking, intense, and ultimately, uplifting.
        </Typography>
        <Typography variant="body1">
          To get in touch, please email{' '}
          <Link href="mailto:sayhi@saynothingandleave.com">sayhi@saynothingandleave.com</Link>
        </Typography>
      </Container>
      <HeroImage
        src={axonImg}
        borderTop={`10px solid ${theme.palette.secondary.dark}`}
        borderBottom={`10px solid ${theme.palette.grey[700]}`}
      />
    </>
  );
};

export default About;
