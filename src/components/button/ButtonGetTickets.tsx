import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import { EmailSignupContext } from '../../providers/EmailSignupProvider';

interface Props extends ButtonProps {}

const DEFAULT_TEXT = 'Subscribe';

/**
 * A special button that opens the Eventbrite ticket purchase modal.
 */
const ButtonGetTickets: React.FC<Props> = ({ children, variant, ...btnProps }) => {
  const { setIsOpen } = React.useContext(EmailSignupContext);
  return (
    <Button variant={variant || 'contained'} {...btnProps} onClick={() => setIsOpen(true)}>
      {children || DEFAULT_TEXT}
    </Button>
  );
};

export default ButtonGetTickets;
