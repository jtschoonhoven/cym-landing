import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AlertTitle,
  Box,
  Container,
  Dialog,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { EmailSignupContext } from '../../providers/EmailSignupProvider';
import EmailSignup from './EmailSignup';
import H2 from '../typography/H2';
import Bold from '../typography/Bold';
import H3 from '../typography/H3';

export const EMAIL_SIGNUP_MODAL_CONTAINER_ID = 'email-signup-modal';
export const SUBSCRIBE_MODAL_CONTAINER_HEIGHT_PX = 500;

/**
 * An Eventbrite ticketing checkout modal.
 */
const EmailSignupModal: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(EmailSignupContext);
  const theme = useTheme();

  return (
    <>
      <Dialog fullWidth maxWidth="xl" open={isOpen} onClose={() => setIsOpen(false)} keepMounted>
        <Container sx={{ marginBottom: 5, marginTop: 2 }}>
          <Box id={EMAIL_SIGNUP_MODAL_CONTAINER_ID}>
            <H2>Subscribe to hear about future shows</H2>
            <Typography variant="body1">
              <Bold>The current run of Change Your Mind ended April 30, 2023.</Bold>
              <br />
              Subscribe below to hear about new shows and future productions from{' '}
              <Bold>
                <Link href="https://saynothingandleave.com/">SayNothingAndLeave</Link>
              </Bold>
              .
              <br />
            </Typography>
            <EmailSignup title={<></>} />
            <br />
            <Typography variant="body1">
              Think we should re-open and extend the show? Drop us an email at{' '}
              <Link rel="noopener noreferrer" href="mailto:sayhi@saynothingandleave.com">
                sayhi@saynothingandleave.com
              </Link>
              .
            </Typography>
          </Box>
        </Container>
      </Dialog>
    </>
  );
};

export default EmailSignupModal;
