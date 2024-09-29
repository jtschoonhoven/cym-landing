import { galleryFiles, galleryMetadata, galleryPath } from '../../galleryAssets';
import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import fuzzysort from 'fuzzysort';

const filters: {
  [filter: string]: string[];
} = {};

galleryFiles.forEach((f) => {
  const [, filter] = f.match(/\/Gallery\/([\w ]*?)\//i) || [];

  if (filter) {
    if (!filters[filter]) {
      filters[filter] = [];
    }

    filters[filter].push(f);
  }
});

// const filterKeys = Object.keys(filters).sort((a, b) => (a > b ? 1 : -1));
// const filterOptions = ['All', ...filterKeys];
const filterOptions: {[key: string]: string} = {
  All: 'All',
  Drawings: 'Pathology Drawings',
  Polaroids: 'Personality Deviants',
  Feedback: 'Feedback',
  Fodder: 'Fodder',
};

const filterOrder = ['All', 'Polaroids', 'Drawings', 'Feedback', 'Fodder'];

export function Gallery() {
  const [searchQuery, setSearchQuery] = useState<string>(() => '');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(() => false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(() => 0);
  const [filter, setFilter] = useState<string>(() => 'All');

  const handleSearchQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event || !event.target) return;
    setSearchQuery(event.target.value);
  }, [setSearchQuery])

  const openLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    },
    [setIsLightboxOpen, setLightboxIndex],
  );
  
  const files = useMemo(() => {
    const filteredFiles = filter !== 'All' ? filters[filter] : galleryFiles;

    if (searchQuery) {
      return fuzzysort.go(searchQuery, filteredFiles, {
        threshold: .3,
        all: false,
      }).map(r => 
        r.target
      );
    } else {
      return filteredFiles;
    }
  }, [filter, searchQuery]);

  const lightboxPrevious = useCallback(() => {
    const newIndex = (lightboxIndex - 1)
    setLightboxIndex(newIndex < 0 ? files.length -1 : newIndex);
  }, [files, lightboxIndex, setLightboxIndex]);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((lightboxIndex + 1) % files.length);
  }, [files, lightboxIndex, setLightboxIndex]);


  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        scroll="paper"
        open={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        keepMounted
      >
        <Grid wrap="nowrap" container justifyContent="space-between" alignContent="center" alignItems="stretch">
          <Button onClick={lightboxPrevious}>
            <ArrowBackIosNew />
          </Button>
          <div>
            <img
              style={{ objectFit: 'contain', width: '100%', height:'90vh' }}
              // srcSet={`${item}`}
              src={`${files[lightboxIndex]}`}
              // alt={item.title}
              loading="lazy"
            />
          </div>
          <Button onClick={lightboxNext}>
            <ArrowForwardIos />
          </Button>
        </Grid>
      </Dialog>
      <Container
        maxWidth="lg"
        sx={{ marginTop: 5 }}
        children={
          <>
            <Grid container gap={2} alignItems="center" alignContent="center" justifyContent="center">
              <Typography variant="h4">Gallery</Typography>
              <Grid gap={1} wrap="wrap" container justifyContent="center" >
                {filterOrder.map((k) => (
                  <ToggleButton onClick={() => setFilter(filterOptions[k])} size="small" selected={filter === filterOptions[k]} key={k} value={filterOptions[k]}>{k}</ToggleButton>
                ))}
              </Grid>
              <TextField sx={{ top: '-5px' }} label="Search" variant="outlined" size="small" value={searchQuery} onChange={handleSearchQuery} />
            </Grid>
            <ImageList cols={matchDownMd ? 2 : 4} variant="quilted" gap={6}>
              {galleryFiles.map((item, index) => (
                <ImageListItem
                  sx={{ cursor: 'pointer', display: files.includes(item) ? 'initial' : 'none' }}
                  key={item}
                  onClick={() => openLightbox(files.indexOf(item))}
                >
                  <img
                    // srcSet={`${item}`}
                    src={item.replace('.webp', '-thumb.webp')}
                    // alt={item.title}
                    loading="lazy"
                  />
                  {/* <ImageListItemBar position="bottom" title={item.replace(/([\w \/]*?)([^\/]*?)\.webp/i, '$2')} /> */}
                </ImageListItem>
              ))}
            </ImageList>
          </>
        }
      />
    </>
  );
}
