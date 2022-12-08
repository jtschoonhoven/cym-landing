import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

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
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: '#333',
        },
      },
    },
  },
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
