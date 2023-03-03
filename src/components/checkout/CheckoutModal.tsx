import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AlertTitle,
  Box,
  Container,
  Dialog,
  Typography,
  useTheme,
} from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import Bold from '../typography/Bold';
import { ExpandMore } from '@mui/icons-material';

export const CHECKOUT_MODAL_CONTAINER_ID = 'checkout-modal';
export const CHECKOUT_MODAL_CONTAINER_HEIGHT_PX = 500;

/**
 * An Eventbrite ticketing checkout modal.
 */
const CheckoutModal: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(CheckoutContext);
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <Dialog fullWidth maxWidth="xl" open={isOpen} onClose={() => setIsOpen(false)} keepMounted>
        <Container sx={{ marginBottom: 1, marginTop: 2 }}>
          {/* <Alert severity="info" sx={{ justifyContent: 'center' }}>
            Tickets available now!
          </Alert> */}
          {/* <EmailSignup /> */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Bold>
                By purchasing a ticket you confirm that you are at least 18 years old and have read the content
                warnings.
              </Bold>
            </AccordionSummary>
            <AccordionDetails>
              <AlertTitle>
                <Bold>Please note, this show includes the following:</Bold>
              </AlertTitle>
              <ul>
                <li>Loud noises</li>
                <li>Bright and flashing lights</li>
                <li>Themes of mental illness and hospitalization</li>
                <li>Movement that may be challenging for people with limited mobility (most wheelchairs OK)</li>
                <li>Sight and hearing restricted by headphones and goggles</li>
              </ul>
              <Typography variant="body2">
                <Bold>That said, this is not a "scary" experience and we hope you leave feeling inspired!</Bold>
                <br /><br />If you are interested in undergoing a personality editing treatment but are not able to afford the
                treatment price at this time, please reach out to us at <a href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Reduced%20price%20ticket%20request">sayhi@saynothingandleave.com</a>.
                <br /><br />
                Appointments are available between <Bold>April 7 and April 29</Bold>. Specific appointment times listed below.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <br />
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
