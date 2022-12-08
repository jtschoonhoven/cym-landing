import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import '@fontsource/prompt';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25282F',
    },
    secondary: {
      main: '#569388',
      light: '#BFD9D4',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  typography: {
    fontFamily: 'Prompt, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Prompt, Arial';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
