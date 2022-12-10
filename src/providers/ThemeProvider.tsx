import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { grey } from '@mui/material/colors';
import '@fontsource/prompt';

export const COLORS = {
  raisin: '#25282F',
  wintergreen: '#569388',
  opal: '#BFD9D4',
  cyan: '#00FFFF',
  yellow: '#FFFF00',
  magenta: '#FF00FF',
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.wintergreen,
    },
    secondary: {
      main: COLORS.wintergreen,
      light: COLORS.opal,
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    action: {
      disabledBackground: grey[400],
      disabled: grey[300],
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
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: grey[900] },
      },
    },
  },
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
