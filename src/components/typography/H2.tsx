import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
}

/**
 * Custom Header 2 component with extra style options.
 */
const H2: React.FC<Props> = ({ children, variant, sx, ...typographyProps }) => {
  const theme = useTheme();
  return (
    <Typography variant={variant || 'h2'} {...typographyProps}>
      <span
        style={{
          backgroundColor: 'black',
          color: theme.palette.secondary.light,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        {children}
      </span>
    </Typography>
  );
};

export default H2;
