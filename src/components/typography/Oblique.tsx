import React from 'react';

interface Props extends React.PropsWithChildren {}

/**
 * Utility component for italicized text.
 */
const Oblique: React.FC<Props> = ({ children }) => {
  return <span style={{ textDecoration: 'italic' }}>{children}</span>;
};

export default Oblique;
