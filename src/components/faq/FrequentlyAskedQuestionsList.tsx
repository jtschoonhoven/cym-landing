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
        Tickets are available Thursday through Sunday. We are currently booking for Fall 2023.{' '}
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
        <li>Approximately one hour.</li>
      </ul>
      <Bold>What time should I arrive?</Bold>
      <ul>
        <li>
          Please arrive at your scheduled ticket time—no need to arrive early. If you arrive {'>'}10min late, we may not
          be able to accommodate you.
        </li>
      </ul>
      <Bold>Can I book an appointment with friends?</Bold>
      <ul>
        <li>
        You are welcome to book appointments as a group, but please note that each person must go through the personality editing portion of the experience individually. Each appointment slot can only accommodate 6 individuals at a time. Be sure to get a ticket for every person in your group.
        </li>
      </ul>
      <Bold>How much do tickets cost?</Bold>
      <ul>
        <li>The base ticket price is $55. Peak hour appointments are $65. Your ticket will be cheaper if you purchase 2 ticket (Date Night) or 6 ticket (Clinic to Yourself) bundle pricing.</li>
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
        <li>
          We can offer full refunds if you contact us to cancel at least one week before your show time. Please contact{' '}
          <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Cancellation%20request">
            sayhi@saynothingandleave.com
          </Link>{' '}
          if you need to cancel or reschedule.
        </li>
      </ul>
      <Bold>Is there an age limit?</Bold>
      <ul>
        <li>Change Your Mind is only available to those 18 and older.</li>
      </ul>
      <Bold>Is this an escape room?</Bold>
      <ul>
        <li>No.</li>
      </ul>
      <Bold>Is this wheelchair accessible?</Bold>
      <ul>
        <li>
          Yes. Wheelchairs under 34" wide are fine. Note that there is a tight corner in the venue that may not be
          accessible to some electric scooters. Please email{' '}
          <Link href="mailto:sayhi@saynothingandleave.com?subject=CYM:%20Accessibility inquiry">
            sayhi@saynothingandleave.com
          </Link>{' '}
          with any questions.
        </li>
      </ul>
      <Bold>What if I’m not fluent in English?</Bold>
      <ul>
        <li>
          Some thematic elements of the experience may be harder to understand if you are not fluent in English,
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
