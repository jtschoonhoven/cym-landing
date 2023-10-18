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
            <H2>SUBSCRIBE FOR CYM UPDATES AND TO HEAR ABOUT FUTURE SHOWS</H2>
            <Typography variant="body1">
              <br />
              Subscribe below for updates on all things Change Your Mind and to hear about future productions from{' '}
              <Bold>
                <Link target="_blank" href="https://saynothingandleave.com/">SayNothingAndLeave</Link>
              </Bold>
              .
              <br />
            </Typography>
            <EmailSignup title={<></>} />
            <br />
            <Typography variant="body1">
            Questions? Comments? Concerns? Drop us an email at{' '}
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
