import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import videoSrc from '../../assets/video/hero.mp4';

interface Props extends PropsWithChildren {
  height: number;
  initialWidthPx?: number;
}

/**
 * Video background content for the landing page "hero" banner.
 */
const HeroVideo: React.FC<Props> = ({ height, initialWidthPx, children }) => {
  const [width, setWidth] = React.useState(initialWidthPx || window.outerWidth);
  const containerRef = React.createRef<HTMLDivElement>();

  // Watch for resize events and change the video width
  React.useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        const newWidth = containerRef.current?.offsetWidth;
        newWidth && setWidth(newWidth);
      });
      resizeObserver.observe(containerRef.current);
    }
    return () => {
      resizeObserver && resizeObserver.disconnect();
    };
  }, [containerRef]);

  return (
    <Box ref={containerRef}>
      <Box sx={{ position: 'absolute', float: 'left', zIndex: 1 }}>{children}</Box>
      <video
        src={videoSrc}
        style={{
          filter: 'grayscale(80%) invert(100%) brightness(50%) blur(1px)',
          display: 'block',
          objectFit: 'cover',
          objectPosition: '50% 50%',
          height,
          width,
        }}
        autoPlay
        loop
        muted
      />
    </Box>
  );
};

export default HeroVideo;
