import { Unstable_Grid2 as Grid } from '@mui/material';
import React from 'react';
import AboutCard from './AboutCard';
import eyeImg from '../../assets/images/eye.svg';
import staffImg from '../../assets/images/staff.svg';
import brainImg from '../../assets/images/brain.svg';
import heartImg from '../../assets/images/heart.svg';

/**
 * A grid of Cards with associated actions.
 */
const AboutIcons: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AboutIcons;
