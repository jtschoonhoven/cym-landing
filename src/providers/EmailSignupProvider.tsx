import React from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const EmailSignupContext = React.createContext<Props>({
  isOpen: false,
  setIsOpen: (isOpen) => null,
});

const isEmailSignupLanding = () => window.location.hash.includes('subscribe');

/**
 * Expose the current state of the subscribe modal.
 */
const SubscribeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(isEmailSignupLanding());
  return <EmailSignupContext.Provider value={{ isOpen, setIsOpen }}>{children}</EmailSignupContext.Provider>;
};

export default SubscribeProvider;
