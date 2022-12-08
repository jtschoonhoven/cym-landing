import { Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import phrenologyImg from '../../assets/images/phrenology.jpg';
import HeroImage from '../util/hero-image/HeroImage';

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ marginTop: 2, fontWeight: 700 }}>
          WHO WE ARE
        </Typography>
        <Typography variant="body1" component="span" sx={{ fontWeight: 700 }}>
          Change Your Mind{' '}
        </Typography>
        <Typography variant="body2" component="span">
          is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
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
