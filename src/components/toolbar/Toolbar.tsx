import React from 'react';
import { AppBar as MuiAppBar, Button, IconButton, styled, Toolbar as MuiToolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ToolbarDrawer from './ToolbarDrawer';
import VerticallyCentered from '../util/vertically-centered/VerticallyCentered';
import ButtonGetTickets from '../button/ButtonGetTickets';
import { COLORS } from '../../providers/ThemeProvider';

export interface ToolbarItem {
  text: string;
}

const TOOLBAR_HEIGHT_PX = 75;

const AppBar = styled(MuiAppBar)`
  background-color: rgba(255,255,255, 0.65);
  background-image: initial;
`;

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
      <AppBar position="sticky" sx={{ height: TOOLBAR_HEIGHT_PX }}>
        <VerticallyCentered>
          <XlToolBar>
            {/* Drawer-open icon for mobile */}
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <MenuIcon color="secondary" />
              </IconButton>
            </Typography>
            <ButtonGetTickets includeSubscribe />
          </XlToolBar>
        </VerticallyCentered>
      </AppBar>
      <ToolbarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Toolbar;
