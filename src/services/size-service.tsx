import { Theme, useMediaQuery, useTheme } from '@mui/material';

/**
 * Returns true if the current viewport is smaller than the given breakpoint.
 */
export const isSmallerThan = (theme: Theme, size: 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  return useMediaQuery(theme.breakpoints.down(size));
};

/**
 * React hook that returns true if the current viewport is smaller than the given breakpoint.
 */
export const useIsSmallerThan = (size: 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  const theme = useTheme();
  return isSmallerThan(theme, size);
};
