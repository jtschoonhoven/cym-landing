import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useIsSmallerThan } from '../../services/size-service';

interface Props {
  imgSrc: string;
  title: string;
  text?: string;
}

/**
 * A "card" component styled for the About section of the site.
 */
const AboutCard: React.FC<Props> = ({ imgSrc, title, text }) => {
  const isXs = useIsSmallerThan('sm');
  return (
    <Card elevation={6}>
      <CardMedia component="img" height="200px" image={imgSrc} sx={{ objectFit: 'cover', objectPosition: '50% 20%' }} />
      <CardContent sx={{ padding: 0, textAlign: 'center' }}>
        <Typography variant="subtitle1" sx={{ padding: 0, marginTop: 1 }}>
          {title}
        </Typography>
        {text ? (
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default AboutCard;
