import React from 'react';
import H2 from '../typography/H2';
import FrequentlyAskedQuestionsList from '../faq/FrequentlyAskedQuestionsList';

export const ABOUT_FAQS_PRIMARY_ID = 'faqs'

/**
 * A grid of Cards with staff members.
 */
const aboutFAQs: React.FC = () => {
  return (
    <>
      <H2 sx={{ marginBottom: 0 }}>FAQs</H2><br/>
      <FrequentlyAskedQuestionsList />
    </>
  );
};

export default aboutFAQs;
