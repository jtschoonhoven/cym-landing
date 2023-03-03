import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CheckoutProvider from './providers/CheckoutProvider';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CheckoutProvider>
        <App />
      </CheckoutProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
