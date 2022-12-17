import React from 'react';
import { Container, Theme, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import { COLORS } from '../../providers/ThemeProvider';
import Underlined from '../typography/Underlined';
import H1 from '../typography/H1';
import Subtitle1 from '../typography/Subtitle1';
import ButtonGetTickets from '../button/ButtonGetTickets';

const HERO_HEIGHT_PX = 600;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[900]};
  width: 100vw;
  border-top: 20px solid black;
  border-bottom: 30px solid ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
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
 * Above-the-fold hero banner for the landing page.
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
            <ButtonGetTickets size="large" />
          </Box>
        </Container>
      </HeroVideo>
    </Wrapper>
  );
};

export default Hero;
