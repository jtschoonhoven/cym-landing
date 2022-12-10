import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import Colored from './Colored';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
}

/**
 * Custom subtitle component with extra style options.
 */
const Subtitle2: React.FC<Props> = ({ children, variant, color, bgColor, sx, ...typographyProps }) => {
  color = color === undefined ? 'black' : color;
  bgColor = bgColor === undefined ? 'rgba(255, 255, 255, 0.6)' : bgColor;
  return (
    <Typography variant={variant || 'subtitle2'} {...typographyProps} sx={{ marginTop: 3, ...sx }}>
      <Colored color={color} bgColor={bgColor}>
        {children}
      </Colored>
    </Typography>
  );
};

export default Subtitle2;
