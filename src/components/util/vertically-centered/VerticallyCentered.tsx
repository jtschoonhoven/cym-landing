import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

/**
 * A utitlity class to align the contents vertically within the containing element.
 */
const VerticallyCentered: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
      <Box sx={{ display: 'block' }}>{children}</Box>
    </Box>
  );
};

export default VerticallyCentered;
