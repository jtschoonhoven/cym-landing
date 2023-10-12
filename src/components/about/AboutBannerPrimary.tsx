import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { Container, Link, useTheme } from '@mui/material';
import H2 from '../typography/H2';
import { COLORS } from '../../providers/ThemeProvider';
import H3 from '../typography/H3';

export const ABOUT_BANNER_PRIMARY_ID = 'about';

/**
 * The lead banner in the below-the-fold content section.
 */
const AboutBannerPrimary: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <HeroImage sx={{borderTop: 'none', backgroundColor: COLORS.yellow}}>
        {/* <H2>The New Science of Personality Editing</H2>
        <Subtitle1 sx={{ marginTop: 0 }}>
          Change Your Mind is the leading provider of cosmetic personality adjustments. So you can be the person you're
          truly meant to be.
        </Subtitle1> */}

        <Container>
          <H3 sx={{ margin: 0, fontStyle: 'italic', display: 'block' }}>
            “Gets right what much immersive theater gets wrong”{" "}
            <Link
              target="_blank"
              style={{ textDecoration: 'underline' }}
              href="https://datebook.sfchronicle.com/theater/immersive-theater-psych-experiment-personality-17896462#spotim-comments"
            >— SF Chronicle</Link>
          </H3>
        </Container>
      </HeroImage>
    </>
  );
};

export default AboutBannerPrimary;
