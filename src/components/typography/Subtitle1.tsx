import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
}

/**
 * Custom subtitle component with extra style options.
 */
const Subtitle1: React.FC<Props> = ({ children, variant, ...typographyProps }) => {
  const theme = useTheme();
  return (
    <Typography variant={variant || 'subtitle1'} {...typographyProps}>
      <span
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          padding: '0 10px 0 10px',
          filter: 'drop-shadow(8px 4px 5px #ccc)',
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        {children}
      </span>
    </Typography>
  );
};

export default Subtitle1;
