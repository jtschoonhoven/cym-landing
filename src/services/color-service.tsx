import { hexToRgb as muiHexToRgb } from '@mui/material';

export const hexToRgb = (hex: string, opacity?: number): string => {
  let rgb = muiHexToRgb(hex);
  if (opacity === undefined) {
    return rgb;
  }
  return `${rgb.substring(0, rgb.length - 1)}, ${opacity.toPrecision(2)})`;
};
