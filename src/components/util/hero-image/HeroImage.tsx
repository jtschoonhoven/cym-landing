import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import H1 from '../../typography/H1';
import H2 from '../../typography/H2';
import Subtitle1 from '../../typography/Subtitle1';

const DEFAULT_HEIGHT = '400px';

const Body = styled(Typography)`
  margin-top: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  color: #0c0c0c;
  padding: 10px 10px 10px 10px;
  filter: drop-shadow(8px 4px 5px #ccc);
`;

const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: 50% 50%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || DEFAULT_HEIGHT};
  margin: 20px 0 20px 0;
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement>, PropsWithChildren {
  h1?: string;
  h2?: string;
  subtitle1?: string;
  body1?: string;
  body2?: string;
  borderTop?: string;
  borderBottom?: string;
}

/**
 * A full-width image with a constrained height.
 */
const HeroImage: React.FC<Props> = ({
  borderTop,
  borderBottom,
  children,
  h1,
  h2,
  subtitle1,
  body1,
  body2,
  height,
  ...imgProps
}) => {
  return (
    <Box>
      {h1 || h2 || subtitle1 || body1 || body2 || children ? (
        <Box sx={{ position: 'absolute', float: 'left', zIndex: 1 }}>
          <Container
            sx={{
              height: height || DEFAULT_HEIGHT,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {h1 ? <H1>{h1}</H1> : null}
            {h2 ? <H2>{h2}</H2> : null}
            {subtitle1 ? <Subtitle1>{subtitle1}</Subtitle1> : null}
            {body1 ? <Body variant="body1">{body1}</Body> : null}
            {body2 ? <Body variant="body2">{body2}</Body> : null}
            {children}
          </Container>
        </Box>
      ) : null}
      <StyledImage height={height} {...imgProps} />
    </Box>
  );
};

export default HeroImage;
