import React from 'react';
import { Button, Container, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import { COLORS } from '../../providers/ThemeProvider';

const HERO_HEIGHT_PX = 600;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[900]};
  width: 100vw;
  border-top: 20px solid black;
  border-bottom: 20px solid ${({ theme }: { theme: Theme }) => theme.palette.grey[900]};
`;

const HeaderWord = styled.span`
  letter-spacing: -0.1rem;
  line-height: 6rem;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  color: #f3f3f3;
  width: fit-content;
  margin: 4px 0 0 0;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 10px 0 10px;
  filter: drop-shadow(8px 4px 3px #000);
`;

const Subtitle = styled(Typography)`
  letter-spacing: -0.05rem;
  margin-top: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: 900;
  color: #0c0c0c;
  padding: 0 10px 0 10px;
  filter: drop-shadow(8px 4px 5px #ccc);
`;

const Description = styled(Typography)`
  letter-spacing: -0.04rem;
  margin-top: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  color: #0c0c0c;
  padding: 10px 10px 10px 10px;
  filter: drop-shadow(8px 4px 5px #ccc);
`;

/**
 * Above-the-fold banner for the landing page.
 */
const Hero: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Wrapper theme={theme}>
      <HeroVideo height={HERO_HEIGHT_PX}>
        <Container sx={{ display: 'flex', height: HERO_HEIGHT_PX, flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '4rem', sm: '6rem' } }}>
            <HeaderWord>
              <span style={{ textDecoration: 'underline', textDecorationColor: COLORS.cyan }}>C</span>hange
            </HeaderWord>
            <HeaderWord>
              <span style={{ textDecoration: 'underline', textDecorationColor: COLORS.yellow }}>Y</span>our
            </HeaderWord>
            <HeaderWord>
              <span style={{ textDecoration: 'underline', textDecorationColor: COLORS.magenta }}>M</span>ind.
            </HeaderWord>
          </Typography>
          <Subtitle variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.35rem' } }}>
            the immersive experience
          </Subtitle>
          <Description sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            <span style={{ fontWeight: 900, fontSize: '1.3rem' }}>
              Choose yourself. <span style={{ fontStyle: 'italic' }}>Change Your Mind.</span>
            </span>
            <br />
            Personality editing is finally here. Our trained clinicians are ready to provide you with your fully custom
            persona. It's fast, affordable, and{' '}
            <span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>completely safe*</span> so you can truly{' '}
            <span style={{ fontWeight: 900 }}>#ChooseYourself</span>.
          </Description>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button
              size={isXs ? 'medium' : 'large'}
              variant="contained"
              color="secondary"
              sx={{ fontWeight: 700 }}
              disabled
            >
              Get Tickets
            </Button>
            <Box component="span" sx={{ width: '20px' }} />
            <Button size={isXs ? 'medium' : 'large'} variant="contained" color="primary" sx={{ fontWeight: 700 }}>
              Press Info
            </Button>
          </Box>
        </Container>
      </HeroVideo>
    </Wrapper>
  );
};

export default Hero;
