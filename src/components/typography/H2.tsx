import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import Colored from './Colored';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
}

/**
 * Custom Header 2 component with extra style options.
 */
const H2: React.FC<Props> = ({ children, variant, color, bgColor, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color === undefined ? theme.palette.secondary.light : color;
  bgColor = bgColor === undefined ? 'black' : bgColor;
  return (
    <Typography
      variant={variant || 'h2'}
      {...typographyProps}
      sx={{
        marginBottom: 4,
        textShadow: `4px 2px 0 rgb(0, 0, 0, 0.7)`,
        ...sx,
      }}
    >
      <Colored color={color} bgColor={bgColor}>
        {children}
      </Colored>
    </Typography>
  );
};

export default H2;
