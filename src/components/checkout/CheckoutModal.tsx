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
import { CheckoutContext } from '../../providers/CheckoutProvider';
import Bold from '../typography/Bold';
import { ExpandMore } from '@mui/icons-material';
import { setInnerHTML } from '../util/inner-html';
import FrequentlyAskedQuestionsList from '../faq/FrequentlyAskedQuestionsList';
import SafetyInformation from '../faq/SafetyInformation';

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
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Bold>Safety Information</Bold>
            </AccordionSummary>
            <AccordionDetails>
              <SafetyInformation />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Bold>FAQs</Bold>
            </AccordionSummary>
            <AccordionDetails>
              <FrequentlyAskedQuestionsList isTicketsPage />
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
        >
          <span
            dangerouslySetInnerHTML={{ __html: `` }}
            ref={(element) => {
              if (!element) return;
              setInnerHTML(
                element,
                `<div class="tt-widget"><div class="tt-widget-fallback"><p><a href="https://www.tickettailor.com/events/saynothingandleave/869469/select-date?ref=website_widget" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_138656" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/events/saynothingandleave/869469/select-date" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>`,
              );
            }}
          ></span>
        </Box>
      </Dialog>
    </>
  );
};

export default CheckoutModal;
