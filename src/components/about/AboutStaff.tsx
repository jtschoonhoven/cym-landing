import React from 'react';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AboutCard from './AboutCard';
import alex from '../../assets/images/alex.png';
import ellie from '../../assets/images/ellie.png';
import jon from '../../assets/images/jon.png';
import larry from '../../assets/images/larry.png';
import H2 from '../typography/H2';

/**
 * A grid of Cards with staff members.
 */
const AboutStaff: React.FC = () => {
  return (
    <>
      <H2 sx={{ marginBottom: 0 }}>Staff</H2>
      <Typography variant="body1">Our expert technicians are eager to assist you.</Typography>
      <Grid container spacing={3} marginTop={1}>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={larry} title="Dr. Masc" text="Performed by L.M. Bogad" href="https://www.lmbogad.com/" />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={jon} title="Jon Schoonhoven" text="Director, Writer, Producer" />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard
            imgSrc={ellie}
            title="Ellie DiBerardino"
            text="Writer, Producer"
            href="https://elliediberardino.com/"
          />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={alex} title="Alex Howard" text="Tech Lead, Producer" />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutStaff;
