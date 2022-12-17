import React from 'react';
import { ListItemButton, ListItemButtonProps, ListItemText } from '@mui/material';
import eventbrite from '../../services/eventbrite-service';
import { v4 as uuid4 } from 'uuid';

interface Props extends ListItemButtonProps {}

const DEFAULT_TEXT = 'Get Tickets';

/**
 * A special button that opens the Eventbrite ticket purchase page.
 */
const ListItemButtonGetTickets: React.FC<Props> = ({ children, ...btnProps }) => {
  const [uuid, _] = React.useState(uuid4());

  const onClick = () => {
    if (!eventbrite.MODAL_TRIGGER_UUIDS.includes(uuid)) {
      window.location.href = eventbrite.EVENT_URL;
    }
  };

  return (
    <ListItemButton
      id={eventbrite.MODAL_TRIGGER_ID}
      data-uuid={uuid}
      onClick={onClick}
      sx={{ textAlign: 'center' }}
      {...btnProps}
    >
      {children || <ListItemText primary={DEFAULT_TEXT} />}
    </ListItemButton>
  );
};

export default ListItemButtonGetTickets;
