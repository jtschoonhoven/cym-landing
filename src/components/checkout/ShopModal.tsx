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
} from '@mui/material';
import { ShopContext } from '../../providers/ShopProvider';
import Bold from '../typography/Bold';
import { ExpandMore } from '@mui/icons-material';
import { setInnerHTML } from '../util/inner-html';
import FrequentlyAskedQuestionsList from '../faq/FrequentlyAskedQuestionsList';
import SafetyInformation from '../faq/SafetyInformation';

export const SHOP_MODAL_CONTAINER_ID = 'shop-modal';
export const SHOP_MODAL_CONTAINER_HEIGHT_PX = 500;

/**
 * An Eventbrite ticketing checkout modal.
 */
const ShopModal: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(ShopContext);

  return (
    <>
      <Dialog fullWidth maxWidth="xl" open={isOpen} onClose={() => setIsOpen(false)} keepMounted>
        <Box
          id={SHOP_MODAL_CONTAINER_ID}
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
                `<div class="tt-widget"><div class="tt-widget-fallback"><p><a href="https://www.tickettailor.com/checkout/new-session/store/5049/chk/6ac1?ref=website_widget" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_138656" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/checkout/new-session/store/5049/chk/6ac1?ref=website_widget" data-type="inline" data-inline-minimal="false" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>`,
              );
            }}
          ></span>
        </Box>
      </Dialog>
    </>
  );
};

export default ShopModal;
