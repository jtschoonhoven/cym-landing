import { Box, Fade, ImageList, ImageListItem, Modal } from '@mui/material';
import React from 'react';
// import textLogoImg from '../../assets/images/text-logo.png';
// import circleLogoImg from '../../assets/images/circle-logo.svg';
// import limbicImg from '../../assets/images/limbic-system.png';
// import larryHandsImg from '../../assets/images/Dr-Masc-with-Folded-Hands-by-LM-Bogad-photographer-Alex-Howard.png';
// import larrySincereImg from '../../assets/images/Dr-Masc-looking-Sincere-by-LM-Bogad-photographer-Alex-Howard.png';
// import larryAliensImg from '../../assets/images/Dr-Masc-with-Open-Hands-by-LM-Bogad-photographer-Alex-Howard.png';

interface ImgInfo {
  src: string;
  title: string;
}

const IMAGES: ImgInfo[] = [
  // { src: textLogoImg, title: 'Text Logo' },
  // { src: larrySincereImg, title: 'Dr. Masc' },
  // { src: larryAliensImg, title: 'Dr. Masc' },
  // { src: larryHandsImg, title: 'Dr. Masc' },
  // { src: limbicImg, title: 'Harmful Antisocial Tendencies' },
  // { src: circleLogoImg, title: 'Circle Logo' },
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
                style={{
                  overflow: 'hidden',
                  objectFit: 'cover',
                  objectPosition: '50% 30%',
                  backgroundColor: '#262A3C',
                }}
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
