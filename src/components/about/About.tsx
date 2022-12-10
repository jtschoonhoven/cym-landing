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
} from '@mui/material';
import React from 'react';
import phrenologyImg from '../../assets/images/phrenology.jpg';
import axonImg from '../../assets/images/axon.jpg';
import HeroImage from '../util/hero-image/HeroImage';

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* <Container maxWidth="md">
        <Grid container>
          <Grid sm={3} xs={6}>
            <Card>
              <CardMedia component="img" height="140" image={phrenologyImg} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          <span
            style={{
              textTransform: 'uppercase',
              backgroundColor: 'black',
              color: theme.palette.secondary.light,
              lineHeight: '5rem',
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            The New Science of Personality Editing
          </span>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Change Your Mind{' '}
          </Typography>
          is the world's first clinic to offer fully custom personality adjustments. Our experimental technology unlocks
          rapid and dramatic changes in identity, habits, anxiety, agreeableness, and much more. All from the comfort of
          our luxurious San Francisco clinic. For less than the cost of a single session of traditional talk therapy,
          you can have a brand new personality—in days instead of months.
        </Typography>
      </Container>
      <HeroImage
        src={phrenologyImg}
        borderTop={`10px solid ${theme.palette.secondary.dark}`}
        borderBottom={`10px solid ${theme.palette.grey[700]}`}
      />
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          <span
            style={{
              textTransform: 'uppercase',
              backgroundColor: 'black',
              color: theme.palette.secondary.light,
              lineHeight: '5rem',
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            Press Info
          </span>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Change Your Mind{' '}
          </Typography>
          is the first production by artist collective <span style={{ fontWeight: 700 }}>[Say Nothing and Leave]</span>{' '}
          to be made available to the general public. Born in the seedy underbelly of the Bay Area's underground
          immersive theater scene (which is a real thing), Change Your Mind offers a rare opportunity to witness the
          gritty, transgressive performance style that is unique to San Francisco. We are proud to be located on Haight
          St., the spiritual home of our preferred style of radical and unusual "art."
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          This immersive performance explores themes of identity, consciousness, and mental health, and it is not subtle
          about any of these. Participants are subjected to psychologically intense stimuli and difficult choices. No
          matter which choice they make, they will certainly{' '}
          <span style={{ fontStyle: 'italic' }}>change their mind</span>.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Change Your Mind includes 1-1 interactions between participants and performers, binaural audio, 1-way mirrors,
          deep faked video, personality exams, flashing lights, unscripted moments, branching narrative, and, in one
          scene, all of these simultaneously. The result is heartbreaking, intense, and ultimately, uplifting.
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
