import React from 'react';
import { Link } from '@mui/material';
import { CheckoutContext } from '../../providers/CheckoutProvider';
import Bold from '../typography/Bold';
interface Props {
  isTicketsPage?: boolean;
}

const FrequentlyAskedQuestionsList = ({ isTicketsPage }: Props) => {
  const { setIsOpen } = React.useContext(CheckoutContext);
  return (
    <>
      <Bold>Is Change Your Mind a real mental health facility?</Bold>
      <ul>
        <li>
          No. This is a piece of interactive theater where you will have a fictional experience set in a wellness
          facility.
        </li>
      </ul>
      <Bold>When can I experience Change Your Mind?</Bold>
      <ul>
        <li>
          Tickets are available almost every Thurs-Sun throughout April 2023.{' '}
          {isTicketsPage ? (
            'View specific timeslots below.'
          ) : (
            <Link sx={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
              View specific timeslots.
            </Link>
          )}
        </li>
      </ul>
      <Bold>Where can I experience Change Your Mind?</Bold>
      <ul>
        <li>440 Haight St, San Francisco, CA.</li>
      </ul>
      <Bold>How long does this experience take?</Bold>
      <ul>
        <li>Under one hour.</li>
      </ul>
      <Bold>What time should I arrive?</Bold>
      <ul>
        <li>
          Please arrive at your scheduled ticket time—no need to arrive early. If you arrive {'>'}10min late, we may not
          be able to accommodate you.
        </li>
      </ul>
      <Bold>What should I wear?</Bold>
      <ul>
        <li>
          Please refrain from wearing any large, extravagant headwear that would difficult for you to quickly remove.
          Other than that, any clothing is fine.
        </li>
      </ul>
      <Bold>Can I book an appointment with friends?</Bold>
      <ul>
        <li>
          You are welcome to book appointments as a group, but please note that you will each undergo your own
          experience individually.
        </li>
      </ul>
      <Bold>How much do tickets cost?</Bold>
      <ul>
        <li>Tickets are $49.</li>
      </ul>
      <Bold>I’m really interested in buying a ticket, but I cannot afford it. What should I do?</Bold>
      <ul>
        <li>
          Please email us at{' '}
          <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Reduced%20price%20ticket%20request">
            sayhi@saynothingandleave.com
          </Link>{' '}
          and we will see what we can do.
        </li>
      </ul>
      <Bold>What is your cancellation and refund policy?</Bold>
      <ul>
        <li>Please contact <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Cancellation%20request">sayhi@saynothingandleave.com</Link> if you need to cancel or reschedule your show time.</li>
      </ul>
      <Bold>Is there an age limit?</Bold>
      <ul>
        <li>Since this is a solo experience, Change Your Mind is only available to those 18 and older.</li>
      </ul>
      <Bold>Is this a scary experience?</Bold>
      <ul>
        <li>
          Portions of the experience may be sensorially overwhelming, and some themes (mental illness, hospitalization)
          may be a bit unsettling for some participants. However, this is not a horror experience, there are no jump
          scares, and we hope the conclusion of the experience leaves you feeling uplifted and inspired.
        </li>
      </ul>
      <Bold>Is this an escape room?</Bold>
      <ul>
        <li>No.</li>
      </ul>
      <Bold>Is this wheelchair accessible?</Bold>
      <ul>
        <li>
          Yes. Normal wheelchairs under 34" wide are fine. Note that there is a tight corner in the venue that may not
          be accessible to some electric scooters. Please email{' '}
          <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Accessibility inquiry">
            sayhi@saynothingandleave.com
          </Link>{' '}
          with any questions.
        </li>
      </ul>
      <Bold>Does it matter if English isn’t my first language?</Bold>
      <ul>
        <li>
          Some thematic elements of the experience may be harder to understand if English is not your first language,
          though the technical artistry may still be impactful. Please email{' '}
          <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Language information">
            sayhi@saynothingandleave.com
          </Link>{' '}
          with any questions.
        </li>
      </ul>
    </>
  );
};

export default FrequentlyAskedQuestionsList;