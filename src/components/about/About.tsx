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
      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          The Revolutionary New Science of Personality Editing
        </Typography>
        <Typography variant="body1" component="span" sx={{ fontWeight: 700 }}>
          Change Your Mind{' '}
        </Typography>
        <Typography variant="body1" component="span">
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
    </>
  );
};

export default About;
