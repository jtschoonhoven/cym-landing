import { Button, styled, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent,
  TimelineDot as MuiTimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import React from 'react';
import neuronImg from '../../assets/images/neuron.jpg';
import nurseImg from '../../assets/images/nurse.jpg';
import H2 from '../typography/H2';
import HeroImage from '../util/hero-image/HeroImage';
import H3 from '../typography/H3';
import { useIsSmallerThan } from '../../services/size-service';

const TimelineDot = styled(MuiTimelineDot)({
  backgroundColor: 'black',
  padding: '5px 10px 5px 10px',
  fontWeight: 700,
});

const TimelineConnector = styled(MuiTimelineConnector)({
  backgroundColor: 'black',
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
            <H3>Book your first appointment</H3>
            <Typography variant="body1">Appointments are available in 15 minute intervals.</Typography>
            <Button variant="contained" size="large" disabled>
              Get Tickets
            </Button>
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
            <H3>Receive your complimentary Personality Assessment</H3>
            <Typography variant="body1">Appointments are available in 15 minute intervals.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>2</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={neuronImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default AboutSteps;
