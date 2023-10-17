import { Box, Divider, Drawer, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import React from 'react';
import ButtonGetTickets from '../button/ButtonGetTickets';
import ToolbarDrawerButton from './ToolbarDrawerButton';
import { ABOUT_BANNER_PRIMARY_ID } from '../about/AboutBannerPrimary';
import { ABOUT_PRESS_ID } from '../about/AboutPress';
import Subtitle1 from '../typography/Subtitle1';
import Colored from '../typography/Colored';
import { ABOUT_FAQS_PRIMARY_ID } from '../about/AboutFAQs';

const WIDTH_PX = 240;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * A mobile-friendly alternative to the desktop toolbar.
 */
const ToolbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    palette: { grey, primary, secondary },
  } = useTheme();

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH_PX, backgroundColor: grey[300] } }}
      >
        <Colored bgColor={grey[900]} color={grey[100]}>
          <Link href="#" sx={{ textDecoration: 'none' }} onClick={onClose}>
            <Typography
              variant="subtitle1"
              sx={{
                width: '100%',
                color: grey[100],
                textAlign: 'center',
                padding: '10px 0 10px 0',
              }}
            >
              Change Your Mind
            </Typography>
          </Link>
        </Colored>
        <Box onClick={onClose} sx={{ textAlign: 'center' }}>
          <Divider />
          <List>
            <ListItem>
              <ButtonGetTickets sx={{ width: '100%' }} />
            </ListItem>
            <Divider />
            <ListItem>
              <ToolbarDrawerButton text="About" href={`#${ABOUT_BANNER_PRIMARY_ID}`} />
            </ListItem>
            <Divider />
            <ListItem>
              <ToolbarDrawerButton text="Team" href={`#staff`} />
            </ListItem>
            <Divider />
            <ListItem>
              <ToolbarDrawerButton text="Safety & FAQs" href={`#${ABOUT_FAQS_PRIMARY_ID}`} />
            </ListItem>
            <Divider />
            <ListItem>
              <ToolbarDrawerButton text="Press info" href={`#${ABOUT_PRESS_ID}`} />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ToolbarDrawer;
