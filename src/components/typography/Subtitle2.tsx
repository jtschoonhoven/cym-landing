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
  return (
    <Typography variant={variant || 'subtitle2'} {...typographyProps} sx={{ marginTop: 3, ...sx }}>
      <Colored color={color} bgColor={bgColor} noise={false}>
        {children}
      </Colored>
    </Typography>
  );
};

export default Subtitle2;
