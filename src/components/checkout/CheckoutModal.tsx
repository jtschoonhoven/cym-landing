import React from 'react';
import { Alert, AlertTitle, Box, Button, Checkbox, Container, Dialog } from '@mui/material';
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
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  return (
    <>
      <Dialog fullWidth maxWidth="xl" open={isOpen} onClose={() => setIsOpen(false)} keepMounted>
        <Container sx={{ marginBottom: 1, marginTop: 2 }}>
          <Alert severity="info" sx={{ justifyContent: 'center' }}>
            Tickets are not yet available. Please check back soon.
          </Alert>
          <EmailSignup />
          {/* <Alert severity="error" sx={{ justifyContent: 'center' }}>
            <Box style={{ display: isConfirmed ? 'none' : 'block' }}>
              <AlertTitle>
                <Bold>Warning! This performance includes the following:</Bold>
              </AlertTitle>
              <ul>
                <li>Flashing lights</li>
                <li>Incidental physical touch by performers</li>
                <li>Themes of mental illness, injury, and medical trauma</li>
                <li>Active movement in small spaces (may not be possible for people with limited mobility)</li>
                <li>Participants will wear headphones and goggles and consume one (vegan) sugar pill</li>
              </ul>
            </Box>
            <Bold>I confirm that I am at least 18 years old and I am aware of the content warnings.</Bold>
            <br />
            <Button
              variant="contained"
              color="warning"
              onClick={() => setIsConfirmed(!isConfirmed)}
              sx={{ width: '100%' }}
            >
              <Checkbox checked={isConfirmed} color="default" onChange={() => setIsConfirmed(!isConfirmed)} />{' '}
              <Bold>{isConfirmed ? 'Confirmed' : 'Confirm and select tickets'}</Bold>
            </Button>
          </Alert> */}
        </Container>
        {/* <Box
          id={CHECKOUT_MODAL_CONTAINER_ID}
          sx={{
            filter: isConfirmed ? '' : 'grayscale(1) blur(2px)',
            pointerEvents: isConfirmed ? '' : 'none',
          }}
        /> */}
      </Dialog>
    </>
  );
};

export default CheckoutModal;
