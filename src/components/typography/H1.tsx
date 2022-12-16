import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import Colored from './Colored';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
  noise?: boolean;
}

/**
 * Custom Header 1 component with extra style options.
 */
const H1: React.FC<Props> = ({ children, variant, color, bgColor, noise = true, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color === undefined ? theme.palette.secondary.light : color;
  bgColor = bgColor === undefined ? 'black' : bgColor;
  return (
    <Typography
      variant={variant || 'h1'}
      {...typographyProps}
      sx={{
        marginBottom: 4,
        display: 'block',
        textShadow: `4px 2px 0 rgb(0, 0, 0, 0.7)`,
        ...sx,
      }}
    >
      <Colored color={color} bgColor={bgColor} noise={noise}>
        {children}
      </Colored>
    </Typography>
  );
};

export default H1;
