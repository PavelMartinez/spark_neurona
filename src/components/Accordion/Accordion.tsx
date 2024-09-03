'use client';

import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import QuestionProps from '@/typescript/interfaces/Accordion/QuestionProps';

interface AccordionProps {
  data: QuestionProps[]
}

export const Accordion = ({ data }: AccordionProps): JSX.Element => {
  const [questions, _] = useState<QuestionProps[]>(data)
  const [expanded, setExpanded] = useState<number>()

  return (
    <section className='accordion'>
        {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} is_expanded={expanded == question.id} customClickEvent={(e) => { setExpanded(question.id) }} />
        ))}
    </section>
  )
}