import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import blueDropsVideo from '../../assets/video/blue-drops.mp4';
import blueOrangeVideo from '../../assets/video/blue-orange.mp4';
import eyesLookingVideo from '../../assets/video/eyes-looking.mp4';
import eyesSmileVideo from '../../assets/video/eyes-smile.mp4';
import headModelVideo from '../../assets/video/head-model.mp4';
import orangeDropsVideo from '../../assets/video/orange-drops.mp4';
import swirlsVideo from '../../assets/video/swirls.mp4';

interface Props extends PropsWithChildren {
  height: number;
  initialWidthPx?: number;
}

const VIDEO_DURATION_MS = 4500;

const VIDEOS = [
  swirlsVideo,
  blueDropsVideo,
  blueOrangeVideo,
  eyesLookingVideo,
  eyesSmileVideo,
  headModelVideo,
  orangeDropsVideo,
];

/**
 * Video background content for the landing page "hero" banner.
 */
const HeroVideo: React.FC<Props> = ({ height, initialWidthPx, children }) => {
  const [width, setWidth] = React.useState(initialWidthPx || window.outerWidth);
  const [videoIndex, setVideoIndex] = React.useState(0);
  const containerRef = React.createRef<HTMLDivElement>();

  // Rotate through the videos every `VIDEO_DURATION_MS`
  React.useEffect(() => {
    const nextVideoIndex = videoIndex >= VIDEOS.length - 2 ? 0 : videoIndex + 1;
    const timeoutId = setTimeout(() => setVideoIndex(nextVideoIndex), VIDEO_DURATION_MS);
    return () => clearTimeout(timeoutId);
  }, [videoIndex]);

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
        src={VIDEOS[videoIndex]}
        style={{
          display: 'block',
          objectFit: 'cover',
          objectPosition: '50% 50%',
          height,
          width,
        }}
        autoPlay
        muted
      />
    </Box>
  );
};

export default HeroVideo;
