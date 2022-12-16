import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import { hexToRgb } from '../../services/color-service';
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
const H3: React.FC<Props> = ({ children, variant, color, bgColor, noise = false, sx, ...typographyProps }) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant || 'h3'}
      {...typographyProps}
      sx={{
        marginBottom: 4,
        display: 'block',
        textShadow: `4px 2px 4px ${theme.palette.primary.light}`,
        ...sx,
      }}
    >
      <Colored color={color} bgColor={bgColor} noise={noise}>
        {children}
      </Colored>
    </Typography>
  );
};

export default H3;
