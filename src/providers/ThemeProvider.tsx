import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { grey } from '@mui/material/colors';
import '@fontsource/prompt';

export const COLORS = {
  raisin: '#2f3140',
  wintergreen: '#b93995',
  opal: '#fcf5e3',
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
      fontSize: '7rem',
      letterSpacing: '-0.1rem',
      lineHeight: '7rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      width: 'fit-content',
      filter: 'drop-shadow(8px 4px 3px #000)',
      [defaultTheme.breakpoints.down('lg')]: { fontSize: '6.4rem', lineHeight: '6.7rem' },
      [defaultTheme.breakpoints.down('md')]: { fontSize: '5.4rem', lineHeight: '5.6rem' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.2rem', lineHeight: '4.3rem' },
    },
    h2: {
      color: grey[100],
      fontSize: '5rem',
      lineHeight: '5.3rem',
      letterSpacing: '-0.04rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('lg')]: { fontSize: '5.4rem', lineHeight: '5.5rem' },
      [defaultTheme.breakpoints.down('md')]: { fontSize: '4.4rem', lineHeight: '4.5rem' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3rem', lineHeight: '3.1rem' },
    },
    h3: {
      color: grey[100],
      fontSize: '3rem',
      lineHeight: '3rem',
      letterSpacing: '-0.03rem',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '2rem', lineHeight: '2.2rem' },
    },
    subtitle1: {
      color: grey[900],
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.04rem',
      fontWeight: 900,
      marginTop: '0px',
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1.2rem', lineHeight: '1.7rem' },
    },
    subtitle2: {
      color: grey[900],
      fontSize: '1.2rem',
      lineHeight: '1.5rem',
      letterSpacing: '-0.03rem',
      fontWeight: 900,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1rem', lineHeight: '1.4rem' },
    },
    body1: {
      color: grey[900],
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.02rem',
      marginTop: 10,
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '1rem', lineHeight: '1.4rem' },
    },
    body2: {
      color: grey[900],
      fontSize: '1.1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.01rem',
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '0.9rem', lineHeight: '1.2rem' },
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: { paper: { backgroundColor: '#fff', backgroundImage: 'none' } },
    },
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
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontSize: '1.5rem',
          [defaultTheme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
        },
        sizeMedium: {
          fontSize: '1rem',
          [defaultTheme.breakpoints.down('sm')]: { fontSize: '0.8rem' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:
            // https://stackoverflow.com/a/13996191/3076390
            'url(data:image/png;base64,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)',
        },
      },
    },
  },
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
