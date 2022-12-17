import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import eventbrite from '../../services/eventbrite-service';
import { v4 as uuid4 } from 'uuid';

interface Props extends ButtonProps {}

const DEFAULT_TEXT = 'Get Tickets';

/**
 * A special button that opens the Eventbrite ticket purchase page.
 */
const ButtonGetTickets: React.FC<Props> = ({ children, variant, ...btnProps }) => {
  const [uuid, _] = React.useState(uuid4());

  const onClick = () => {
    if (!eventbrite.MODAL_TRIGGER_UUIDS.includes(uuid)) {
      window.location.href = eventbrite.EVENT_URL;
    }
  };

  return (
    <Button
      id={eventbrite.MODAL_TRIGGER_ID}
      variant={variant || 'contained'}
      data-uuid={uuid}
      onClick={onClick}
      {...btnProps}
    >
      {children || DEFAULT_TEXT}
    </Button>
  );
};

export default ButtonGetTickets;
