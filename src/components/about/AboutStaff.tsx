import React from 'react';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AboutCard from './AboutCard';
import alex from '../../assets/images/alex.png';
import ellie from '../../assets/images/ellie.png';
import jon from '../../assets/images/jon.png';
import larry from '../../assets/images/larry.png';
import H2 from '../typography/H2';
import alyssa from '../../assets/images/alyssa.png';
import bryan from '../../assets/images/bryan.png';
import david from '../../assets/images/david.png';
import dan from '../../assets/images/dan.png';
import elise from '../../assets/images/elise.png';
import evin from '../../assets/images/evin.png';
import hannah from '../../assets/images/hannah.png';
import jae from '../../assets/images/jae.png';
import lindsay from '../../assets/images/lindsay.png';
import ren from '../../assets/images/ren.png';
import ryan from '../../assets/images/ryan.png';
import H3 from '../typography/H3';

/**
 * A grid of Cards with staff members.
 */
const AboutStaff: React.FC = () => {
  return (
    <>
      <H2 sx={{ marginBottom: 0 }}>Staff</H2>
      <Grid container spacing={3} marginTop={1}>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={larry} title="Dr. Masc" text="Performed by L.M. Bogad" href="https://www.lmbogad.com/" />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard
            imgSrc={jon}
            title="Jon Schoonhoven"
            text="Director, Writer, Producer"
            href="https://www.instagram.com/jtschoonhoven/"
          />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard
            imgSrc={ellie}
            title="Ellie DiBerardino"
            text="Director, Producer"
            href="https://elliediberardino.com/"
          />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={alex} title="Alex Howard" text="Technical Director, Producer" />
        </Grid>
      </Grid>
      <H2 sx={{ marginBottom: 0 }} marginTop={5}>
        Meet The Techs
      </H2>
      <Typography variant="body1">Our expert technicians are eager to assist you.</Typography>
      <Grid container spacing={3} marginTop={1}>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard
            imgSrc={alyssa}
            title="Alyssa Larson"
            text="CYM Head Technician"
            href="https://goodstuffevents.com"
          />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={jae} title="Jae Starfox" text="CYM Head Technician" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={bryan} title="Bryan  Bigler" text="CYM Technician" href="https://www.bryanbigler.com" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={dan} title="Danthony" text="CYM Technician" href="https://danthony.website" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={david} title="David Kaplan" text="CYM Technician" href="https://www.davidkaplan.io/" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={elise} title="Elise Liu" text="CYM Technician" href="https://eliseliu.com/" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={evin} title="Evin Wolverton" text="CYM Technician" href="https://evinwolverton.com" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={hannah} title="Hannah Schoonhoven" text="CYM Technician" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={lindsay} title="Lindsay Berkowitz" text="CYM Technician" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={ren} title="S. Caldwell" text="CYM Technician" href="https://serenitycaldwell.com/" />
        </Grid>
        <Grid lg={2} md={3} sm={4} xs={6}>
          <AboutCard imgSrc={ryan} title="Ryan Wolff" text="CYM Technician" />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutStaff;
