import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface Props {
  imgSrc: string;
  title: string;
}

/**
 * A "card" component styled for the About section of the site.
 */
const AboutCard: React.FC<Props> = ({ imgSrc, title }) => {
  return (
    <Card elevation={6}>
      <CardMedia component="img" height="200px" image={imgSrc} sx={{ objectFit: 'fill', objectPosition: '50% 50%' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default AboutCard;
