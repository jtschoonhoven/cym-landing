import React from 'react';
import { Button, ButtonProps, Container } from '@mui/material';
import { ShopContext } from '../../providers/ShopProvider';

interface Props extends ButtonProps {
  includeSubscribe?: boolean;
}

const DEFAULT_TEXT = 'Subscribe';

/**
 * A special button that opens the Eventbrite ticket purchase modal.
 */
const ButtonShop: React.FC<Props> = ({ children, variant, style, includeSubscribe = false, ...btnProps }) => {
  const { setIsOpen } = React.useContext(ShopContext);
  return (
    <div style={style}>
      <Button sx={{pointerEvents: 'all'}} variant={variant || 'contained'} {...btnProps} onClick={() => setIsOpen(true)}>
        {children || "Shop"}
      </Button>
    </div>
  );
};

export default ButtonShop;
