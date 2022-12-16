import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent,
  TimelineDot as MuiTimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import HeroImage from '../util/hero-image/HeroImage';
import nurseImg from '../../assets/images/nurse.jpg';
import anxietyImg from '../../assets/images/anxiety.jpg';
import pillImg from '../../assets/images/pill.jpg';
import balloonsImg from '../../assets/images/balloons.jpg';
import surgeonImg from '../../assets/images/surgeon.jpg';
import { useIsSmallerThan } from '../../services/size-service';

const TimelineDot = styled(MuiTimelineDot)({
  backgroundColor: 'black',
  padding: '5px 10px 5px 10px',
  fontWeight: 700,
});

const TimelineConnector = styled(MuiTimelineConnector)({
  backgroundColor: 'black',
});

const TimelineFlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const AboutSteps: React.FC = () => {
  const isSm = useIsSmallerThan('md');
  return (
    <>
      <H2>How it Works</H2>
      <Timeline position="alternate">
        {/* BOOK */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Book your first appointment</H3>
              <Typography variant="body1">Appointments are available in 15 minute intervals.</Typography>
              <Button variant="contained" size="large" disabled>
                Get Tickets
              </Button>
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>1</TimelineDot>
            <TimelineConnector sx={{ backgroundColor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={nurseImg} height="300px" objectPosition="80% 50%" />
          </TimelineContent>
        </TimelineItem>
        {/* ASSESS */}
        <TimelineItem>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Receive your complimentary Personality Assessment</H3>
              <Typography variant="body1">We'll get to know you so we can make you better.</Typography>
              <Button variant="outlined" size="large">
                Try it out online
              </Button>
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>2</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={anxietyImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
        {/* PILL */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Ingest our patented Personality Improvement Pill</H3>
              <Typography variant="body1">Appointments are available in 15 minute intervals.</Typography>
              <Button variant="outlined" size="large">
                Learn more
              </Button>
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>3</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={pillImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
        {/* EXAM */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Undergo our Personality Improvement Procedure</H3>
              <Typography variant="body1">A quick and painless intervention for a brand new you.</Typography>
              <Button variant="outlined" size="large">
                Open image gallery
              </Button>
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>4</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={surgeonImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
        {/* END */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Live happily ever after</H3>
              <Typography variant="body1">Nothing could possibly go wrong.</Typography>
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>5</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={balloonsImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default AboutSteps;
