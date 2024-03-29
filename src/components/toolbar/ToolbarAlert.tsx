import React from 'react';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Typography, styled, Link } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import { EmailSignupContext } from '../../providers/EmailSignupProvider';

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
  color: white;
  padding: 4px 20px 4px 20px;
  margin: 0;
  font-size: 1.2em;
  text-align: center;
  font-weight: 600;
  width: 100%;
`;

/**
 * Alert text that displays above the primary toolbar, used for ticketing announcements, etc.
 */
const ToolbarAlert: React.FC = () => {
  const { setIsOpen } = React.useContext(EmailSignupContext);
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        {/* <AlertText>
         Now accepting appointments for Fall 2023 —{" "}
          <Link sx={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
            book yours today
          </Link>
          .
        </AlertText> */}
        <AlertText>
          Change Your Mind has wrapped! Please{' '}
          <Link sx={{ textDecoration: 'underline', color: 'white', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
            subscribe to our email list
          </Link>{' '}
          if you’d like to hear about future runs of CYM or other productions.
        </AlertText>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarAlert;
