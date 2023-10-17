import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import Colored from './Colored';
import { COLORS } from '../../providers/ThemeProvider';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
  color?: string;
  bgColor?: string;
  noise?: boolean;
}

/**
 * Custom Header 1 component with extra style options.
 */
const H3: React.FC<Props> = ({ children, variant, color, bgColor, noise = false, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color || theme.palette.grey[900];
  return (
    <Typography
      variant={variant || 'h3'}
      {...typographyProps}
      sx={{
        display: 'block',
        // textShadow: `4px 2px 4px ${theme.palette.primary.light}`,
        ...sx,
      }}
    >
      <Colored color={color} bgColor={bgColor} noise={noise}>
        {children}
      </Colored>
    </Typography>
  );
};

export const H3CutOut: React.FC<Props> = ({ children, variant, color, bgColor = COLORS.raisin, noise = false, sx, ...typographyProps }) => {
  const theme = useTheme();
  color = color || theme.palette.secondary.light;
  return (
    <Typography
      variant={variant || 'h3'}
      {...typographyProps}
      sx={{
        display: 'block',
        textTransform: 'uppercase',
        color,
        backgroundColor: bgColor,
        padding: '8px',
        ...sx,
      }}
    >
        {children}
    </Typography>
  );
};

export default H3;
