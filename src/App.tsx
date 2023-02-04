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

const App: React.FC = () => {
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
