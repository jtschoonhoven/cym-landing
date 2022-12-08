import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import React from 'react';

const WIDTH_PX = 240;

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A mobile-friendly alternative to the desktop toolbar.
 */
const ToolbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                open={isOpen}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: WIDTH_PX,
                    },
                }}
            >
                <Box onClick={onClose} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        MUI
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Get Tickets" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default ToolbarDrawer;
