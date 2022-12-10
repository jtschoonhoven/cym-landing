import { Typography, TypographyProps, useTheme, styled } from '@mui/material';
import React from 'react';
import Colored from './Colored';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
}

/**
 * Custom Header 1 component with extra style options.
 */
const H1: React.FC<Props> = ({ children, variant, color, bgColor, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color === undefined ? theme.palette.primary.light : color;
  bgColor = bgColor === undefined ? 'black' : bgColor;
  return (
    <Typography variant={variant || 'h1'} {...typographyProps} sx={{ marginBottom: 4, display: 'block', ...sx }}>
      <Colored color={color} bgColor={bgColor}>
        {children}
      </Colored>
    </Typography>
  );
};

export default H1;
