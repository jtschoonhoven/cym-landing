import React from 'react';
import { COLORS } from '../../providers/ThemeProvider';
import { Box, Container, Link } from '@mui/material';
import Text from '../typography/Subtitle1';

const AboutPressQuote: React.FC = () => {
  return (
    <>
      <Box
      >
        <Container style={{ maxWidth: 'initial' }}>
          <Text sx={{ margin: 0, fontSize: '1.5rem', fontStyle: 'italic', display: 'block' }}>
            “Gets right what much immersive theater gets wrong”
          </Text>

          <Text sx={{ margin: 0, fontSize: '1.5rem' }}>
            <Link  target="_blank" style={{ color: 'black' }} href="https://datebook.sfchronicle.com/theater/immersive-theater-psych-experiment-personality-17896462#spotim-comments">
              — SF Chronicle
            </Link>
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default AboutPressQuote;
