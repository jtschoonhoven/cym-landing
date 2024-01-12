import React from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ShopContext = React.createContext<Props>({
  isOpen: false,
  setIsOpen: (isOpen) => null,
});

const isTicketingLanding = () => window.location.hash.includes('tickets');

/**
 * Expose the current state of the checkout modal.
 */
const ShopProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(isTicketingLanding());
  return <ShopContext.Provider value={{ isOpen, setIsOpen }}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
