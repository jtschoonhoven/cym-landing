import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import teaserShort from '../../assets/video/teaser-wide-short.mp4';
import teaserRepeat from '../../assets/video/teaser-wide-repeat.mp4';
import { VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';

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
  const [isMuted, setMuted] = React.useState(true);

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
      <Button
        variant="outlined"
        endIcon={isMuted ? <VolumeUp /> : <VolumeOff />}
        color="primary"
        sx={{ float: 'right', position: 'absolute', right: 30, top: 690, zIndex: 3, color: 'white' }}
        onClick={() => setMuted(!isMuted)}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </Button>
      <Box sx={{ position: 'absolute', float: 'left', zIndex: 1, width: '100%' }}>{children}</Box>
      <video
        src={teaserShort}
        style={{
          filter: 'grayscale(50%) brightness(50%)',
          display: 'block',
          objectFit: 'cover',
          objectPosition: '50% 50%',
          height,
          width,
        }}
        autoPlay
        loop
        muted={isMuted}
      />
    </Box>
  );
};

export default HeroVideo;
