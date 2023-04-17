import React from 'react';
import { COLORS } from '../../providers/ThemeProvider';
import { Box, Container } from '@mui/material';
import H2 from '../typography/H2';

const AboutPressQuote: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 0,
          borderTop: `80px solid ${COLORS.raisin}`,
          borderBottom: `50px solid ${COLORS.raisin}`,
        }}
      >
        <Container sx={{ backgroundColor: COLORS.raisin }} style={{ maxWidth: 'initial' }}>
          <H2 sx={{ margin: 0, fontStyle: 'italic', display: 'block' }}>
            “Gets right what much immersive theater gets wrong”
          </H2>
          <H2 sx={{ margin: 0, backgroundColor: COLORS.raisin }}>— SF Chronicle</H2>
        </Container>
      </Box>
    </>
  );
};

export default AboutPressQuote;
