'use client';

import React, { useState } from 'react'
import SingleQuestion from './Question'
import QuestionProps from '@/typescript/interfaces/Accordion/QuestionProps';
import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';

interface AccordionProps {
  intlName: string;
}

interface FAQMessage {
  title: string;
  info: string;
}

export const Accordion = ({ intlName }: AccordionProps): JSX.Element => {
  const [expanded, setExpanded] = useState<string>()

  const t = useTranslations(`FAQ.${intlName}`);
  const messages = useMessages();
  const faqMessages = (messages.FAQ as AbstractIntlMessages)?.[intlName];
  const keys = Object.keys(faqMessages)

  if (!faqMessages || typeof faqMessages !== 'object') {
    return <section className='accordion'>No FAQ data available</section>;
  }

  return (
    <section className='accordion'>
        {keys.map((key) => (
            <SingleQuestion key={key} id={key} title={t(`${key}.title`)} info={t(`${key}.info`)} is_expanded={expanded == key} customClickEvent={(e) => { setExpanded(key) }} />
        ))}
    </section>
  )
}