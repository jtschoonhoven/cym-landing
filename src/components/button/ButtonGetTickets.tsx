import React from 'react';
import { Button, ButtonProps, Container } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import { EmailSignupContext } from '../../providers/EmailSignupProvider';

interface Props extends ButtonProps {
  includeSubscribe?: boolean;
}

const DEFAULT_TEXT = 'Subscribe';

/**
 * A special button that opens the Eventbrite ticket purchase modal.
 */
const ButtonGetTickets: React.FC<Props> = ({ children, variant, style, includeSubscribe = false, ...btnProps }) => {
  const { setIsOpen } = React.useContext(EmailSignupContext);
  const { setIsOpen: setIsCheckoutOpen } = React.useContext(CheckoutContext);
  return (
    <div style={style}>
      {includeSubscribe && <Button sx={{pointerEvents: 'all', marginRight: '6px'}} variant={variant || 'contained'} {...btnProps} onClick={() => setIsOpen(true)}>
        {children || DEFAULT_TEXT}
      </Button>}
      <Button sx={{pointerEvents: 'all'}} variant={variant || 'contained'} {...btnProps} onClick={() => setIsCheckoutOpen(true)}>
        {children || "Get tickets"}
      </Button>
    </div>
  );
};

export default ButtonGetTickets;
