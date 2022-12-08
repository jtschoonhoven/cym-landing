import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Typography, styled } from '@mui/material';
import React from 'react';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  height: 'auto',
  backgroundColor: theme.palette.secondary.main,
  borderBottom: `1px solid ${theme.palette.grey[700]}`,
  '@media all': { minHeight: 0 }, // Override media queries injected by theme.mixins.toolbar
}));

const Toolbar = styled(MuiToolbar)({
  '@media all': { minHeight: 0 }, // Override media queries injected by theme.mixins.toolbar
});

const AlertText = styled(Typography)`
  padding: 5px 20px 4px 20px;
  font-size: 1.2em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  width: 100%;
`;

/**
 * Alert text that displays above the primary toolbar, used for ticketing announcements, etc.
 */
const ToolbarAlert: React.FC = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <AlertText>Coming April, 2023. Tickets on sale soon.</AlertText>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarAlert;
