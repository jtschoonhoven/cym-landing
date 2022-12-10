import React from 'react';
import { Button, Container, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import { COLORS } from '../../providers/ThemeProvider';
import Underlined from '../typography/Underlined';
import Bold from '../typography/Bold';
import Oblique from '../typography/Oblique';

const HERO_HEIGHT_PX = 600;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[900]};
  width: 100vw;
  border-top: 20px solid black;
  border-bottom: 20px solid ${({ theme }: { theme: Theme }) => theme.palette.grey[900]};
`;

const HeaderWord = styled.span`
  display: block;
  width: fit-content;
  margin: 4px 0 0 0;
  padding: 0 10px 0 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Subtitle = styled(Typography)`
  margin-top: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0 10px 0 10px;
  filter: drop-shadow(8px 4px 5px #ccc);
`;

const Description = styled(Typography)`
  margin-top: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  padding: 10px 10px 10px 10px;
  filter: drop-shadow(8px 4px 7px #ccc);
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
          <Typography variant="h1" sx={{ backgroundColor: 'initial' }}>
            <HeaderWord>
              <Underlined color={COLORS.cyan}>C</Underlined>hange
            </HeaderWord>
            <HeaderWord>
              <Underlined color={COLORS.yellow}>Y</Underlined>our
            </HeaderWord>
            <HeaderWord>
              <Underlined color={COLORS.magenta}>M</Underlined>ind.
            </HeaderWord>
          </Typography>
          <Subtitle variant="subtitle1">the immersive experience</Subtitle>
          <Description variant="subtitle2">
            <Bold>
              Choose yourself. <Oblique>Change Your Mind.</Oblique>
            </Bold>
            <br />
            Personality editing is finally here. Our trained clinicians are ready to provide you with your fully custom
            persona. It's fast, affordable, and{' '}
            <Oblique>
              <Underlined>completely safe</Underlined>*
            </Oblique>
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
