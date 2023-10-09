import React from 'react';
import { Link } from '@mui/material';
import Bold from '../typography/Bold';

const SafetyInformation = () => {
  return (
    <>
      <Bold>Clothing:</Bold> Be prepared to remove your hat. Contacts recommended, but glasses should be fine.
      <br />
      <br />
      <Bold>Contact Level:</Bold> Participants can expect light to moderate levels of incidental physical contact when
      equipment is being put on or taken off.
      <br />
      <br />
      <Bold>Content Advisories:</Bold> Mental illness, hospitalization, dark confined spaces.
      <br />
      <br />
      <Bold>Physical Risks:</Bold> Bright and flashing lights may present a risk to photosensitive participants. Small rooms may be difficult to navigate for those with limited mobility.
      <br />
      <br />
      <Bold>Psychological Risks:</Bold> This experience involves deep introspection, intense emotional stimuli, and
      simulations of medical procedures.
      <br />
      <br />
      <Bold>COVID policy:</Bold> Masks are not required, but participants are welcome to wear a mask if they choose.
      Please do not attend if you have symptoms of COVID-19. If you develop symptoms before your showing, contact us at{' '}
      <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Cancellation%20request">
        sayhi@saynothingandleave.com
      </Link>{' '}
      to cancel or reschedule.
      <br />
      <br />
      If you have any questions regarding safety or accessibility, please contact us at{' '}
      <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Safety%20Inquiry">
        sayhi@saynothingandleave.com
      </Link>
      .
    </>
  );
};

export default SafetyInformation;
