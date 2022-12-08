import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: '#1f8e6c',
      light: '#b5e1d4',
    },
    secondary: {
      dark: '#b32756',
      main: '#ef3661',
      light: '#fde5ec',
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
