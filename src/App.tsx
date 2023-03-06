import React from 'react';
import { Paper } from '@mui/material';
import Toolbar from './components/toolbar/Toolbar';
import Hero from './components/hero/Hero';
import styled from '@emotion/styled';
import ToolbarAlert from './components/toolbar/ToolbarAlert';
import About from './components/about/About';
import CheckoutModal from './components/checkout/CheckoutModal';
import NoSleepLanding from './components/no-sleep/NoSleepLanding';

const AppWrapper = styled(Paper)`
  padding-bottom: 30px;
`;

const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false);
  const { hash } = window.location;
  const hashRef = React.useRef(hash);

  React.useEffect(() => {
    if (hash) {
      // We want to reset if the hash has changed
      if (hashRef.current !== hash) {
        hashRef.current = hash;
        scrolledRef.current = false;
      }

      // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
      if (!scrolledRef.current) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          scrolledRef.current = true;
        }
      }
    }
  });
};

const App: React.FC = () => {
  useScrollToLocation();

  return (
    <>
      <CheckoutModal />
      <AppWrapper>
        <NoSleepLanding />
        <ToolbarAlert />
        <Toolbar />
        <Hero />
        <About />
      </AppWrapper>
    </>
  );
};

export default App;
