import React from 'react';
import ripplesImg from '../../assets/images/ripples.jpg';
import HeroImage from '../util/hero-image/HeroImage';
import Subtitle1 from '../typography/Subtitle1';
import { Box, Container, Link, useTheme } from '@mui/material';
import H2 from '../typography/H2';
import { COLORS } from '../../providers/ThemeProvider';
import H3, { H3CutOut } from '../typography/H3';
import Subtitle2 from '../typography/Subtitle2';
import Bold from '../typography/Bold';

export const ABOUT_BANNER_PRIMARY_ID = 'about';

const containerStyles = {
  background: COLORS.yellow,
  borderTop: `20px solid ${COLORS.magenta}`,
  borderBottom: `20px solid ${COLORS.magenta}`,
  padding: '16px 0',
  // height: '50vh',
};

const wrapStyles: React.CSSProperties = {
  margin: '0px auto',
  maxWidth: '780px',
};

const boxStyles: React.CSSProperties = {
  background: COLORS.magenta,
  boxShadow: '0 0 3px rgba(0,0,0,0.6)',
  display: 'flex',
  flexDirection: 'row',
  margin: '20px 0',
  padding: '16px 16px',
};

const headerStyles = {
  fontSize: '1.5rem',
  lineHeight: '1.6rem',
  fontWeight: '600',
  paddingBottom: '8px',
  color: COLORS.white,
};

const subHeaderStyles = {
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: '400',
  color: COLORS.white,
  fontStyle: 'italic',
};

const emojiStyles = { fontSize: '4rem', lineHeight: '4rem', padding: '4px 8px', marginRight: '8px' };

/**
 * The lead banner in the below-the-fold content section.
 */
const KnowBeforeYouGo: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={containerStyles}>
      <div style={wrapStyles}>
        <H3CutOut
          sx={{
            boxShadow: '0 0 3px rgba(0,0,0,0.6)',
            fontStyle: 'italic',
            fontSize: '3.25rem',
            lineHeight: '3.25rem',
            textAlign: 'center',
            margin: '20px 0',
            marginBottom: '32px',
          }}
          bgColor={COLORS.cyan}
        >
          KNOW BEFORE YOU GO!
        </H3CutOut>
        <div style={boxStyles}>
          <div style={emojiStyles}>♿</div>
          <div>
            <div style={headerStyles}>
              <Bold>Your appointment will last about one hour and you’ll be seated for most of that time.</Bold>
            </div>
            <div style={subHeaderStyles}>We don't care what shoes you wear!</div>
          </div>
        </div>
        <div style={boxStyles}>
          <div style={emojiStyles}>🎭</div>
          <div>
            <div style={headerStyles}>
              <Bold>We do not want you to “play a character” while in our clinic.</Bold>
            </div>
            <div style={subHeaderStyles}>please be your genuine, authentic self</div>
          </div>
        </div>
        <div style={boxStyles}>
          <div style={emojiStyles}>😨</div>
          <div>
            <div style={headerStyles}>
              <Bold>Change Your Mind is not a “scary” experience.</Bold>
            </div>
            <div style={subHeaderStyles}>Is something... off... in this clinic? Maybe. But is this a scary experience?<br/>No.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowBeforeYouGo;
