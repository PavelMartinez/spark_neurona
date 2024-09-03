'use client';

import React, { useState, useEffect, MouseEventHandler } from 'react'
import { CloseCircleGradientIcon, CloseCircleIcon } from '../svg';
import QuestionProps from '@/typescript/interfaces/Accordion/QuestionProps';

interface QuestionExtendedProps extends QuestionProps {
    is_expanded: boolean;
    customClickEvent: MouseEventHandler<HTMLSpanElement> | undefined;
}

const Question = ({ title, info, is_expanded, customClickEvent }: QuestionExtendedProps) => {
    const [expanded, setExpanded] = useState<boolean>(is_expanded)

    useEffect(() => {
        setExpanded(is_expanded)
    }, [is_expanded]);

    return (
        <article className='accordion-question' onClick={customClickEvent}>
            <div className='accordion-question__content'>
                <span className='accordion-question__title'>
                    {title}
                </span>
                {expanded && <p className='accordion-question__text'>{info}</p>}
            </div>
            <button className={`accordion-question__button ${expanded ? "accordion-question__button--expanded" : ""}`} onClick={customClickEvent}>
                {expanded ? <CloseCircleGradientIcon /> : <CloseCircleIcon />}
            </button>
        </article>
    )
}

export default Question