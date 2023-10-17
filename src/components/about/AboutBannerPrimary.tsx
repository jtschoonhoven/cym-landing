import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { Box, Container, Link, useTheme } from '@mui/material';
import H2 from '../typography/H2';
import { COLORS } from '../../providers/ThemeProvider';
import H3 from '../typography/H3';

export const ABOUT_BANNER_PRIMARY_ID = 'about';

const foldStyles = {
  backgroundImage: `linear-gradient(176deg, ${COLORS.yellow} 50%, ${COLORS.cyan} calc(50% + 2px))`,
  borderBottom: `20px solid ${COLORS.magenta}`,
  // height: '50vh',
};

const satisfiedHeaderStyles: React.CSSProperties = {
  font: 'Prompt, Arial',
  fontStyle: 'italic',
  color: COLORS.cyan,
  margin: 0,
  paddingBottom: 8,
  paddingLeft: 6,
};

const secondarySatisfiedHeaderStyles = {
  ...satisfiedHeaderStyles,
  color: COLORS.yellow,
};

const wrapStyles: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  margin: '0px auto',
  padding: '40px 12px',
  maxWidth: '1200px',
};

const quoteBoxStyles = {
  position: 'relative',
  font: 'Prompt, Arial',
  background: 'rgba(255,255,255,0.7)',
  color: '#2e2f3f',
  border: `6px solid ${COLORS.cyan}`,
  padding: '16px',
  boxShadow: '0 0 3px rgba(0,0,0,0.6)',
} as React.CSSProperties;

const secondaryQuoteBoxStyles = {
  ...quoteBoxStyles,
  borderColor: COLORS.yellow,
};

const additionalListStyles: React.CSSProperties = {
  flexGrow: '1',
  flexShrink: '0',
  textAlign: 'right',
  fontWeight: 500,
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
};

const secondaryAdditionalListStyles: React.CSSProperties = {
  ...additionalListStyles,
  textAlign: 'left',
  color: COLORS.white,
  fontSize: '1.3rem',
  lineHeight: '1.3rem',
  padding: '0 10px',
  width: '30%',
  paddingTop: 30,
};

const customerQuoteStyles = {
  paddingBottom: 24,
};

/**
 * The lead banner in the below-the-fold content section.
 */
const AboutBannerPrimary: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={foldStyles}>
      <div style={wrapStyles}>
        <div style={{ flex: '1 1 65%' }}>
          <h2 style={satisfiedHeaderStyles}>SATISFIED JOURNALISTS</h2>
          <div style={quoteBoxStyles}>
            <H3
              sx={{
                fontSize: '3.25rem',
                lineHeight: '3.25rem',
                width: '90%',
                margin: 0,
                fontStyle: 'italic',
                display: 'block',
              }}
            >
              “GETS RIGHT WHAT MUCH IMMERSIVE THEATER GETS WRONG.”
            </H3>
            <div style={{ paddingTop: 6, textAlign: 'right', width: '95%' }}>
              <Link
                target="_blank"
                style={{ textDecoration: 'underline', color: '#2e2f3f', fontSize: '2rem' }}
                href="https://datebook.sfchronicle.com/theater/immersive-theater-psych-experiment-personality-17896462#spotim-comments"
              >
                — SF Chronicle
              </Link>
            </div>
          </div>
        </div>
        <div style={additionalListStyles}>
          <div>
            <Link
              target="_blank"
              style={{ textDecoration: 'underline', color: '#2e2f3f', fontSize: '2rem' }}
              href="https://noproscenium.com/review-rundown-the-one-that-goes-vroooom-19f0e3f54b5f"
            >
              No Proscenium
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              style={{ textDecoration: 'underline', color: '#2e2f3f', fontSize: '2rem' }}
              href="https://sfstandard.com/2023/04/07/if-you-could-delete-the-worst-parts-of-your-personality-would-you/"
            >
              SF Standard
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              style={{ textDecoration: 'underline', color: '#2e2f3f', fontSize: '2rem' }}
              href="https://datebook.sfchronicle.com/event/theater/say-nothing-and-leaves-change-your-mind?fbclid=IwAR3qKRSRtJxOXEbKZ1fC2s94qfur4Tpcshq3tn59AB-8wIieL4l44D3slmg"
            >
              Datebook Pick
            </Link>
          </div>
        </div>
      </div>

      <div style={wrapStyles}>
        <div style={secondaryAdditionalListStyles}>
          <div style={customerQuoteStyles}>"Disorienting, moving, and visually stunning."</div>
          <div style={customerQuoteStyles}>"Like an enema for my brain!"</div>
          <div style={customerQuoteStyles}>"Do this for congress. I'll pay for it."</div>
          <div style={customerQuoteStyles}>"Changing my mind CHANGED MY LIFE!"</div>
        </div>
        <div style={{ flex: '1 1 65%' }}>
          <h2 style={secondarySatisfiedHeaderStyles}>SATISFIED CUSTOMERS</h2>
          <div style={secondaryQuoteBoxStyles}>
            <H3
              sx={{
                fontSize: '3.25rem',
                lineHeight: '3.25rem',
                width: '90%',
                margin: 0,
                fontStyle: 'italic',
                display: 'block',
              }}
            >
              “I KEPT THINKING: EVERYONE MUST EXPERIENCE THIS 'PLAY.'”
            </H3>
            <div style={{ paddingTop: 6, textAlign: 'right', width: '95%', color: '#2e2f3f', fontSize: '2rem' }}>
              — former Jaded Downer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerPrimary;
