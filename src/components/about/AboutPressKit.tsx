import { Box, Fade, ImageList, ImageListItem, Modal } from '@mui/material';
import React from 'react';
import textLogoImg from '../../assets/images/cym-title.svg';
import circleLogoImg from '../../assets/images/circle-logo.svg';
import limbicImg from '../../assets/images/limbic-system.png';
import larryHandsImg from '../../assets/images/larry-hands.png';
import larrySincereImg from '../../assets/images/larry-sincere.png';
import larryAliensImg from '../../assets/images/larry-aliens.png';

interface ImgInfo {
  src: string;
  title: string;
  cols: number;
  rows: number;
}

const IMAGES: ImgInfo[] = [
  { src: textLogoImg, title: 'Text Logo', cols: 2, rows: 2 },
  { src: larrySincereImg, title: 'Dr. Masc', cols: 2, rows: 1 },
  { src: larryAliensImg, title: 'Dr. Masc', cols: 2, rows: 1 },
  { src: larryHandsImg, title: 'Dr. Masc', cols: 2, rows: 1 },
  { src: limbicImg, title: 'Harmful Antisocial Tendencies', cols: 2, rows: 1 },
  { src: circleLogoImg, title: 'Circle Logo', cols: 1, rows: 1 },
];

const AboutPressKit: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalImgSrc, setModalImgSrc] = React.useState('');

  const onClick = (imgSrc: string) => {
    setModalImgSrc(imgSrc);
    setModalOpen(true);
  };

  return (
    <>
      <Box
        sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <ImageList cols={3} rowHeight={164} sx={{ maxWidth: 700 }}>
          {IMAGES.map((img) => (
            <ImageListItem key={img.src}>
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                style={{ overflow: 'hidden', objectFit: 'cover', objectPosition: '70% 30%' }}
                onClick={(e) => onClick(img.src)}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Modal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Fade in={isModalOpen} timeout={500}>
            <img src={modalImgSrc} alt="asd" style={{ maxHeight: '90%', maxWidth: '90%', outline: 'none' }} />
          </Fade>
        </Modal>
      </Box>
    </>
  );
};

export default AboutPressKit;
