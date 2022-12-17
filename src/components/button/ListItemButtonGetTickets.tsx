import React from 'react';
import { ListItemButton, ListItemButtonProps, ListItemText } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';

interface Props extends ListItemButtonProps {}

const DEFAULT_TEXT = 'Get Tickets';

/**
 * A special button that opens the Eventbrite ticket purchase page.
 */
const ListItemButtonGetTickets: React.FC<Props> = ({ children, ...btnProps }) => {
  const { setIsOpen } = React.useContext(CheckoutContext);
  return (
    <ListItemButton onClick={() => setIsOpen(true)} sx={{ textAlign: 'center' }} {...btnProps}>
      {children || <ListItemText primary={DEFAULT_TEXT} />}
    </ListItemButton>
  );
};

export default ListItemButtonGetTickets;
