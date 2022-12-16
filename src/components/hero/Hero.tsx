import React from 'react';
import { Button, Container, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import { COLORS } from '../../providers/ThemeProvider';
import Underlined from '../typography/Underlined';
import Bold from '../typography/Bold';
import Oblique from '../typography/Oblique';
import H1 from '../typography/H1';
import Subtitle1 from '../typography/Subtitle1';
import Subtitle2 from '../typography/Subtitle2';
import { hexToRgb } from '../../services/color-service';

const HERO_HEIGHT_PX = 600;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[900]};
  width: 100vw;
  border-top: 20px solid black;
  border-bottom: 20px solid ${({ theme }: { theme: Theme }) => theme.palette.grey[900]};
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <H1
    color="white"
    bgColor={'rgba(0, 0, 0, 0.5)'}
    sx={{ margin: '4px 0 0 0', lineHeight: '6rem', fontSize: '6rem' }}
    noise={false}
  >
    {children}
  </H1>
);

/**
 * Above-the-fold banner for the landing page.
 */
const Hero: React.FC = () => {
  const theme = useTheme();
  const bgColor = 'rgb(255, 255, 255, 0.5)';
  return (
    <Wrapper theme={theme}>
      <HeroVideo height={HERO_HEIGHT_PX}>
        <Container sx={{ display: 'flex', height: HERO_HEIGHT_PX, flexDirection: 'column', justifyContent: 'center' }}>
          <Title>
            <Underlined color={COLORS.cyan}>C</Underlined>hange
          </Title>
          <Title>
            <Underlined color={COLORS.yellow}>Y</Underlined>our
          </Title>
          <Title>
            <Underlined color={COLORS.magenta}>M</Underlined>ind.
          </Title>
          <Subtitle1 bgColor={bgColor}>the immersive experience</Subtitle1>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button size="large" variant="contained" color="secondary" disabled>
              <Bold>Get Tickets</Bold>
            </Button>
            <Box component="span" sx={{ width: '20px' }} />
            <Button size="large" variant="contained" color="primary" sx={{ fontWeight: 700 }}>
              Press Info
            </Button>
          </Box>
        </Container>
      </HeroVideo>
    </Wrapper>
  );
};

export default Hero;
