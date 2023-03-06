import { Fade, ImageList, ImageListItem, Modal } from '@mui/material';
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
}

const IMAGES: ImgInfo[] = [
  { src: textLogoImg, title: 'Text Logo' },
  { src: larrySincereImg, title: 'Dr. Masc' },
  { src: larryAliensImg, title: 'Dr. Masc' },
  { src: larryHandsImg, title: 'Dr. Masc' },
  { src: limbicImg, title: 'Harmful Antisocial Tendencies' },
  { src: circleLogoImg, title: 'Circle Logo' },
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
      <ImageList cols={3} rowHeight={164}>
        {IMAGES.map((img) => (
          <ImageListItem key={img.src}>
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              style={{ overflow: 'hidden' }}
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
    </>
  );
};

export default AboutPressKit;
