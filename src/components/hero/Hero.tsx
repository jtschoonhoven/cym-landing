import React from 'react';
import { Container, Theme, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import HeroVideo from './HeroVideo';
import ButtonGetTickets from '../button/ButtonGetTickets';
import HeroTitle from './HeroTitle';

const HERO_HEIGHT_PX = 'calc(var(--vh, 1vh) * 65)';

const Wrapper = styled(Box)`
  width: 100vw;
  border-bottom: 20px solid ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
`;

/**
 * Above-the-fold hero banner for the landing page.
 */
const Hero: React.FC = () => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <HeroVideo height={HERO_HEIGHT_PX}>
        <Container sx={{ display: 'flex', height: HERO_HEIGHT_PX, flexDirection: 'column', justifyContent: 'center' }}>
          <HeroTitle />
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}> */}
            <ButtonGetTickets sx={{marginTop: 3}} size="large" />
          {/* </Box> */}
        </Container>
      </HeroVideo>
    </Wrapper>
  );
};

export default Hero;
