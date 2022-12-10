import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';

interface Props extends React.PropsWithChildren, TypographyProps {
  component?: React.ElementType;
}

/**
 * Custom Header 1 component with extra style options.
 */
const H1: React.FC<Props> = ({ children, variant, ...typographyProps }) => {
  const theme = useTheme();
  return (
    <Typography variant={variant || 'h1'} {...typographyProps}>
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

export default H1;
