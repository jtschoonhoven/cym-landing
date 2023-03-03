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
import H3 from '../typography/H3';
import HeroImage from '../util/hero-image/HeroImage';
import nurseImg from '../../assets/images/nurse.jpg';
import wheelTeaserImg from '../../assets/images/wheel-teaser.png';
import pillImg from '../../assets/images/pill.jpg';
import balloonsImg from '../../assets/images/balloons.jpg';
import surgeonImg from '../../assets/images/surgeon.jpg';
import ButtonGetTickets from '../button/ButtonGetTickets';
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

/**
 * Step-by-step explanation of the experience.
 */
const AboutSteps: React.FC = () => {
  const isSm = useIsSmallerThan('md');

  return (
    <>
      <Timeline position="alternate">
        {/* BOOK */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Book your first appointment</H3>
              <Typography variant="body1">
                Appointments are available in 50 minute intervals at our Haight St. clinic in San Francisco.
              </Typography>
              <ButtonGetTickets size="large" />
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
              <H3>Diagnose your Personality Pathology</H3>
              <Typography variant="body1">
                Answer some simple questions and we'll determine which Personality Pathology is holding you back.
              </Typography>
              {/* <Button variant="contained" size="large">
                Try it out online
              </Button> */}
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>2</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent display={isSm ? 'none' : 'block'}>
            <HeroImage src={wheelTeaserImg} height="300px" />
          </TimelineContent>
        </TimelineItem>
        {/* PILL */}
        <TimelineItem sx={{ flexDirection: isSm ? 'row-reverse' : 'row' }}>
          <TimelineOppositeContent>
            <TimelineFlexBox>
              <H3>Ingest our patented Personality Improvement Pill</H3>
              <Typography variant="body1">It's vegan and gluten free.</Typography>
              {/* <Button variant="contained" size="large">
                Learn more
              </Button> */}
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
              <H3>Complete the Personality Edit Procedure</H3>
              <Typography variant="body1">A quick and painless intervention for a brand new you.</Typography>
              {/* <Button variant="contained" size="large">
                Open image gallery
              </Button> */}
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
              <H3>Unlock the real you. Be the person you're meant to be.</H3>
              {/* <Typography variant="body1">Nothing could possibly go wrong.</Typography> */}
            </TimelineFlexBox>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>5</TimelineDot>
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
