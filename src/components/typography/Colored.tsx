import { styled } from '@mui/material';

/**
 * Highlight and/or color text with optional padding.
 */
const Colored = styled('span', {
  shouldForwardProp: (prop) =>
    prop !== 'bgColor' && prop !== 'padding' && prop !== 'paddingLeft' && prop !== 'paddingRight',
})<{ bgColor?: string; padding?: string; paddingLeft?: string; paddingRight?: string }>(
  ({ color, bgColor, padding, paddingLeft, paddingRight }) => ({
    color,
    backgroundColor: bgColor,
    padding,
    paddingLeft: !padding && paddingLeft === undefined ? 10 : paddingLeft,
    paddingRight: !padding && paddingRight === undefined ? 10 : paddingRight,
    display: 'inline-block',
  }),
);

export default Colored;
