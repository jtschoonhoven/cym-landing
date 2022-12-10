import React from 'react';

interface Props extends React.PropsWithChildren {
  weight?: number;
}

/**
 * Utility component for bold text with an optional custom weight.
 */
const Bold: React.FC<Props> = ({ weight, children }) => {
  const style: React.CSSProperties = { fontWeight: weight || 700 };
  return <span style={style}>{children}</span>;
};

export default Bold;
