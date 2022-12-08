import React from 'react';
import { AppBar, Button, IconButton, styled, Toolbar as MuiToolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ToolbarDrawer from './ToolbarDrawer';
import VerticallyCentered from '../util/vertically-centered/VerticallyCentered';

export interface ToolbarItem {
  text: string;
}

const TOOLBAR_HEIGHT_PX = 100;

const XlToolBar = styled(MuiToolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: 0,
  '@media all': { minHeight: 0 }, // Override media queries injected by theme.mixins.toolbar
}));

const ToolbarBtn = styled(Button)`
  color: #fcfcfc;
  border-color: #fcfcfc;
  font-weight: 700;
  margin-left: 20px;
  &:hover {
    color: #fff;
  }
`;

/**
 * Primary navigation menu at the top of the page.
 */
const Toolbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar position="static" sx={{ height: TOOLBAR_HEIGHT_PX }}>
        <VerticallyCentered>
          <XlToolBar>
            {/* Drawer-open icon for mobile */}
            <Typography variant="h6" component="div" sx={{ mr: 2, display: { sm: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <MenuIcon />
              </IconButton>
            </Typography>
            {/* Logo for Desktop */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {/* OPTIONAL LOGO GOES HERE */}
            </Typography>
            {/* ABOUT US */}
            <ToolbarBtn size="large" variant="outlined">
              About us
            </ToolbarBtn>
            {/* GET TICKETS */}
            <ToolbarBtn size="large" variant="contained" color="secondary">
              Get Tickets
            </ToolbarBtn>
          </XlToolBar>
        </VerticallyCentered>
      </AppBar>
      <ToolbarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Toolbar;
