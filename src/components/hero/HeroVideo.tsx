import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import teaserShort from '../../assets/video/cym-website-bkgd-icons.mp4';
import { VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';

interface Props extends PropsWithChildren {
  height: number | string;
  initialWidthPx?: number;
}

/**
 * Video background content for the landing page "hero" banner.
 */
const HeroVideo: React.FC<Props> = ({ height, initialWidthPx, children }) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [isMuted, setMuted] = React.useState(true);

  return (
    <Box ref={containerRef} sx={{ position: 'absolute', inset: 0 }}>
      <Button
        variant="outlined"
        endIcon={isMuted ? <VolumeUp /> : <VolumeOff />}
        color="primary"
        sx={{ position: 'absolute', right: 30, bottom: 20, zIndex: 3, color: 'white' }}
        onClick={() => setMuted(!isMuted)}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </Button>
      {/* <Box sx={{ position: 'absolute', float: 'left', zIndex: 1, width: '100%' }}>{children}</Box> */}
      <video
        src={teaserShort}
        style={{
          display: 'block',
          objectFit: 'cover',
          objectPosition: '50% 50%',
          height: '100%',
          width: '100%',
          position: 'relative',
          left: '50%',
          right: 0,
          bottom: 0,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
    </Box>
  );
};

export default HeroVideo;
