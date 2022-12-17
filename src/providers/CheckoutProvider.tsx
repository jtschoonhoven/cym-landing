import React from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CheckoutContext = React.createContext<Props>({
  isOpen: true,
  setIsOpen: (isOpen) => null,
});

/**
 * Expose the current state of the checkout modal.
 */
const CheckoutProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  console.log(isOpen);
  return <CheckoutContext.Provider value={{ isOpen, setIsOpen }}>{children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
