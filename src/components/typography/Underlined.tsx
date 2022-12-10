import React from 'react';

interface Props extends React.PropsWithChildren {
  color?: string;
}

/**
 * Utility component for underlined text with an optional custom color.
 */
const Underlined: React.FC<Props> = ({ color, children }) => {
  const style: React.CSSProperties = { textDecoration: 'underline' };
  if (color) style['textDecorationColor'] = color;
  return <span style={style}>{children}</span>;
};

export default Underlined;
