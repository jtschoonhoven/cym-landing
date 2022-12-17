import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import { hexToRgb } from '../../services/color-service';
import Colored from './Colored';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
}

/**
 * Custom subtitle component with extra style options.
 */
const Subtitle1: React.FC<Props> = ({ children, variant, color, bgColor, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color === undefined ? 'black' : color;
  bgColor = bgColor === undefined ? hexToRgb(theme.palette.secondary.light, 0.8) : bgColor;
  return (
    <Typography variant={variant || 'subtitle1'} {...typographyProps} sx={{ marginTop: 3, ...sx }}>
      <Colored color={color} bgColor={bgColor}>
        {children}
      </Colored>
    </Typography>
  );
};

export default Subtitle1;
