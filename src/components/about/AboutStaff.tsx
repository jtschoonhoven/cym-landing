import React from 'react';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AboutCard from './AboutCard';
import alex from '../../assets/images/alex.png';
import ellie from '../../assets/images/ellie.png';
import jon from '../../assets/images/jon.png';
import larry from '../../assets/images/larry.png';
import H2 from '../typography/H2';
import adair from '../../assets/images/Adair.png';
import alyssa from '../../assets/images/alyssa.png';
import andrew from '../../assets/images/andrew.png';
import bryan from '../../assets/images/bryan.png';
import dan from '../../assets/images/dan.png';
import david from '../../assets/images/david.png';
import elise from '../../assets/images/elise.png';
import evin from '../../assets/images/evin.png';
import fiona from '../../assets/images/Fiona.png';
import hannah from '../../assets/images/hannah.png';
import jae from '../../assets/images/jae.png';
import jeff from '../../assets/images/Jeff.png';
import jordan from '../../assets/images/Jordan.png';
import kristen from '../../assets/images/kristen.png';
import lindsay from '../../assets/images/lindsay.png';
import netta from '../../assets/images/Netta.png';
import ren from '../../assets/images/ren.png';
import ryan from '../../assets/images/ryan.png';
import sarah from '../../assets/images/sarah.png';
import tess from '../../assets/images/Tess.png';
import zack from '../../assets/images/zack.png';
import zoe from '../../assets/images/Zoe.png';
import H3 from '../typography/H3';

const staff = [
  { name: 'Adair Skehan', image: adair, href: 'https://adairstudio.com/' },
  { name: 'Alyssa Larson', image: alyssa, href: 'https://www.goodstuffevents.com/' },
  { name: 'Andrew Somerville', image: andrew, href: 'https://www.andrewsomerville.com/' },
  { name: 'Bryan Bigler', image: bryan, href: 'https://www.bryanbigler.com' },
  { name: 'Danthony', image: dan, href: 'https://danthony.website' },
  { name: 'David Kaplan', image: david, href: 'https://www.davidkaplan.io/' },
  { name: 'Elise Liu', image: elise, href: 'https://eliseliu.com/' },
  { name: 'Evin Wolverton', image: evin, href: 'https://evinwolverton.com/' },
  { name: 'Fiona Read', image: fiona },
  { name: 'Hannah Schoonhoven', image: hannah },
  { name: 'Jeff Tratner', image: jeff },
  { name: 'Jordan Williams', image: jordan },
  { name: 'Kristen Ray', image: kristen  },
  { name: 'Lindsay Berkowitz', image: lindsay, href: 'https://lindsayberkowitz.com' },
  { name: 'Netta Schwarz', image: netta  },
  { name: 'Ryan Wolff', image: ryan  },
  { name: 'S. Caldwell', image: ren, href: 'https://serenitycaldwell.com/'  },
  { name: 'Sarah Lew', image: sarah, href: 'https://www.instagram.com/dumbbabyofficial/?hl=en' },
  { name: 'Tess Bakke', image: tess  },
  { name: 'Zack Guiler', image: zack, href: 'https://venmo.com/u/Zack-Belac'  },
  { name: 'Zoe McCarty', image: zoe  },
].sort((a, b) => {
  const aSplit = a.name.split(' ');
  const bSplit = b.name.split(' ');

  const aFirst = aSplit[0];
  const aLast = aSplit[1];

  const bFirst = bSplit[0];
  const bLast = bSplit[1];

  return (aLast||aFirst).localeCompare(bLast||bFirst);

  // const result = aFirst.localeCompare(bFirst);

  // return result !== 0 ? result : aLast.localeCompare(bLast);
});

/**
 * A grid of Cards with staff members.
 */
const AboutStaff: React.FC = () => {
  return (
    <>
      <H2 sx={{ marginBottom: 0 }}>Clinic Founders</H2>
      <Grid container spacing={3} marginTop={1}>
        <Grid md={3} xs={6}>
          <AboutCard imgSrc={larry} title="Dr. Masc" text="Performed by L.M. Bogad" href="https://www.lmbogad.com/" />
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
          <AboutCard imgSrc={alex} title="Alex Howard" text="Technology & Fabrication" />
        </Grid>
        <Grid md={3} xs={6}>
          <AboutCard
            imgSrc={jon}
            title="Jon Schoonhoven"
            text="Writer"
            href="https://www.instagram.com/jtschoonhoven/"
          />
        </Grid>
      </Grid>
      <H2 sx={{ marginBottom: 0 }} marginTop={5}>
        Meet The Staff
      </H2>
      <Typography variant="body1">Our expert technicians are eager to assist you.</Typography>
      <Grid container spacing={3} marginTop={1}>
        {staff.map((v, i) => (
          <Grid key={`staff-${i}`} lg={2} md={3} sm={4} xs={6}>
            <AboutCard imgSrc={v.image} title={v.name} href={v.href} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutStaff;
