import React from 'react';
import { Container, Theme, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import ButtonGetTickets from '../button/ButtonGetTickets';
import HeroTitle from './HeroTitle';

const HERO_HEIGHT_PX = '100%';

const Wrapper = styled(Box)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 65);
  min-height: 500px;
  border-bottom: 20px solid ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  position: relative;
`;

/**
 * Above-the-fold hero banner for the landing page.
 */
const Hero: React.FC = () => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <HeroVideo height={HERO_HEIGHT_PX}></HeroVideo>
      <Container
        sx={{
          position: 'relative',
          zIndex: 500,
          display: 'flex',
          height: HERO_HEIGHT_PX,
          flexDirection: 'column',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <HeroTitle />
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}> */}
        <ButtonGetTickets sx={{ pointerEvents: 'all', marginTop: 3 }} size="large" />
        {/* </Box> */}
      </Container>
    </Wrapper>
  );
};

export default Hero;
