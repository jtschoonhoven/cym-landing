import React from 'react';
import { COLORS } from '../../providers/ThemeProvider';
import H1 from '../typography/H1';
import Subtitle1 from '../typography/Subtitle1';
import Underlined from '../typography/Underlined';

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

const HeroTitle: React.FC = () => {
  const bgColor = 'rgb(255, 255, 255, 0.5)';
  return (
    <>
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
    </>
  );
};

export default HeroTitle;
