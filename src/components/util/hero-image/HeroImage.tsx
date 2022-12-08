import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';

const DEFAULT_HEIGHT = '400px';

const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: 50% 50%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || DEFAULT_HEIGHT};
  margin: 20px 0 20px 0;
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  borderTop?: string;
  borderBottom?: string;
}

/**
 * A full-width image with a constrained height.
 */
const HeroImage: React.FC<Props> = ({ borderTop, borderBottom, ...props }) => {
  return <StyledImage {...props} style={{ borderTop, borderBottom }} />;
};

export default HeroImage;
