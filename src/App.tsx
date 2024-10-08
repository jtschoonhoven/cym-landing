import React from 'react';
import { Paper } from '@mui/material';
import Toolbar from './components/toolbar/Toolbar';
import Hero from './components/hero/Hero';
import styled from '@emotion/styled';
import ToolbarAlert from './components/toolbar/ToolbarAlert';
import About from './components/about/About';
import CheckoutModal from './components/checkout/CheckoutModal';
import EmailSignupModal from './components/email-signup/EmailSignupModal';
import NoSleepLanding from './components/no-sleep/NoSleepLanding';
import './viewportHeightFix';
import ShopModal from './components/checkout/ShopModal';
import { Gallery } from './components/gallery/gallery';

const AppWrapper = styled(Paper)``;

const App: React.FC = () => {
  const { hash } = window.location;
  const hashRef = React.useRef(hash);
  const scrolledRef = React.useRef(false);

  window.onload = () => {
    if (hash) {
      // We want to reset if the hash has changed
      if (hashRef.current !== hash) {
        hashRef.current = hash;
        scrolledRef.current = false;
      }

      // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
      requestAnimationFrame(() => {
        if (!scrolledRef.current) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            scrolledRef.current = true;
          }
        }
      });
    }
  };

  return (
    <>
      <CheckoutModal />
      <ShopModal />
      <EmailSignupModal />
      <AppWrapper>
        <ToolbarAlert />
        {
          (hashRef.current === '#gallery' ? (
            <Gallery />
          ) : (
            <>
              <Toolbar />
              <Hero />
              <About />
            </>
          ))
        }
      </AppWrapper>
    </>
  );
};

export default App;
