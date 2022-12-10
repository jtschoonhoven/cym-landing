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

const defaultTheme = createTheme();

const theme = createTheme({
  // @ts-expect-error
  mode: 'dark',
  palette: {
    primary: {
      main: COLORS.wintergreen,
    },
    secondary: {
      main: COLORS.wintergreen,
      light: COLORS.opal,
    },
    background: {
      default: grey[300],
      paper: COLORS.opal,
    },
    action: {
      disabledBackground: grey[400],
      disabled: grey[300],
    },
  },
  typography: {
    fontFamily: 'Prompt, Arial',
    h1: {
      color: grey[100],
      fontSize: '6rem',
      letterSpacing: '-0.1rem',
      lineHeight: '7rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      width: 'fit-content',
      filter: 'drop-shadow(8px 4px 3px #000)',
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4rem' },
    },
    h2: {
      color: grey[100],
      fontSize: '4rem',
      letterSpacing: '-0.04rem',
      lineHeight: '4rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3rem' },
    },
    h3: {
      color: grey[100],
      fontSize: '3rem',
      lineHeight: '3rem',
      letterSpacing: '-0.03rem',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '2rem' },
    },
    subtitle1: {
      color: grey[900],
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
      letterSpacing: '-0.04rem',
      fontWeight: 900,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
    },
    subtitle2: {
      color: grey[900],
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.03rem',
      fontWeight: 900,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1rem' },
    },
    body1: {
      color: grey[900],
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.02rem',
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1rem' },
    },
    body2: {
      color: grey[900],
      fontSize: '1.1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.01rem',
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '0.9rem' },
    },
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
    MuiCard: {
      styleOverrides: {
        root: {
          // backgroundColor: grey[900],
          padding: 10,
        },
      },
    },
  },
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
