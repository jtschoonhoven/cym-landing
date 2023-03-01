import React from 'react';
import { Alert, AlertTitle, Box, Button, Checkbox, Container, Dialog, Typography } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import Bold from '../typography/Bold';
import EmailSignup from '../email-signup/EmailSignup';

export const CHECKOUT_MODAL_CONTAINER_ID = 'checkout-modal';
export const CHECKOUT_MODAL_CONTAINER_HEIGHT_PX = 500;

/**
 * An Eventbrite ticketing checkout modal.
 */
const CheckoutModal: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(CheckoutContext);
  // const [isConfirmed, setIsConfirmed] = React.useState(false);

  return (
    <>
      <Dialog fullWidth maxWidth="xl" open={isOpen} onClose={() => setIsOpen(false)} keepMounted>
        <Container sx={{ marginBottom: 1, marginTop: 2 }}>
          {/* <Alert severity="info" sx={{ justifyContent: 'center' }}>
            Tickets available now!
          </Alert> */}
          {/* <EmailSignup /> */}
          <Alert severity="error" sx={{ justifyContent: 'center' }}>
            {/* <Box style={{ display: isConfirmed ? 'none' : 'block' }}> */}
            <AlertTitle>
              <Bold>Warning! This performance includes the following:</Bold>
            </AlertTitle>
            <ul>
              <li>Loud noises</li>
              <li>Bright and flashing lights</li>
              <li>Themes of mental illness and hospitalization</li>
              <li>Movement that may be challenging for people with limited mobility (most wheelchairs OK)</li>
              <li>Sight and hearing restricted by headphones and goggles</li>
            </ul>
            <Typography variant="body2">
              That said, this is not a "scary" experience and we hope you leave feeling inspired.
            </Typography>
            <br />
            {/* </Box> */}
            <Bold>
              By purchasing a ticket I confirm I am at least 18 years old and I am aware of the content warnings.
            </Bold>
            <br />
            {/* <Button
              variant="contained"
              color="warning"
              onClick={() => setIsConfirmed(!isConfirmed)}
              sx={{ width: '100%' }}
            >
              <Checkbox checked={isConfirmed} color="default" onChange={() => setIsConfirmed(!isConfirmed)} />{' '}
              <Bold>{isConfirmed ? 'Confirmed' : 'Confirm and select tickets'}</Bold>
            </Button> */}
          </Alert>
        </Container>
        <Box
          id={CHECKOUT_MODAL_CONTAINER_ID}
          // sx={{
          //   filter: isConfirmed ? '' : 'grayscale(1) blur(2px)',
          //   pointerEvents: isConfirmed ? '' : 'none',
          // }}
        />
      </Dialog>
    </>
  );
};

export default CheckoutModal;
