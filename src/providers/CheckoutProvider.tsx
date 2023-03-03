import React from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CheckoutContext = React.createContext<Props>({
  isOpen: false,
  setIsOpen: (isOpen) => null,
});

const isTicketingLanding = () => {
  if (window.location.pathname.includes('tickets')) {
    return true;
  }
  if (window.location.hash.includes('tickets')) {
    return true;
  }
  return false;
};

/**
 * Expose the current state of the checkout modal.
 */
const CheckoutProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(isTicketingLanding());
  return <CheckoutContext.Provider value={{ isOpen, setIsOpen }}>{children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
