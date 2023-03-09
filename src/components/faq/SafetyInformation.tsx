import React from 'react';
import { Link } from '@mui/material';
import Bold from '../typography/Bold';

const SafetyInformation = () => {
  return (
    <>
      <Bold>Clothing:</Bold> Please wear comfortable shoes. Be prepared to remove your hat. (Glasses are fine.)
      <br />
      <br />
      <Bold>Contact Level:</Bold> Participants can expect light to moderate levels of incidental physical contact when
      equipment is being put on or taken off.
      <br />
      <br />
      <Bold>Content Advisories:</Bold> Mental illness, hospitalization, dark confined spaces.
      <br />
      <br />
      <Bold>Physical Risks:</Bold> Bright and flashing lights may present a risk to photosensitive participants.
      <br />
      <br />
      <Bold>Psychological Risks:</Bold> This experience involves deep introspection, intense emotional stimuli, and
      simulations of medical procedures.
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
