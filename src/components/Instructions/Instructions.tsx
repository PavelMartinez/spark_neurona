'use client';

import React, { useState } from 'react'
import InstructionsData from './data';
import Image from 'next/image';
import { Button } from '../ui/primitives';

const Instructions = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleNext = () => {
        const newStep = currentStep + 1;
        if(newStep < InstructionsData.length)
        {
            setCurrentStep(newStep);
        }
    }

    return (
        <div className='instructions'>
            <ul className="instructions__list">
                {InstructionsData.map((value, index) => (
                    <li 
                        className={`instructions__list-item ${currentStep === index ? "instructions__list-item--current" : ""}`}
                        onClick={() => { setCurrentStep(index) }}
                    >
                        <div className="instructions__list-number">
                            {index + 1}
                        </div>
                        <div className="instructions__list-title">
                            {value.title}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="instructions__content">
                <div className="instructions__main">
                    <div className="instructions__main-step">
                        {currentStep + 1} step
                    </div>
                    <div className="instructions__main-text">
                        <div className="instructions__main-title">
                            {InstructionsData[currentStep].title}
                        </div>
                        <div className="instructions__main-description">
                            {InstructionsData[currentStep].description}
                        </div>
                    </div>
                    <Button
                        variant='primary'
                        className="instructions__main-button"
                        onPress={handleNext}
                        isDisabled={currentStep === InstructionsData.length - 1}
                    >
                        Next
                    </Button>
                </div>
                <Image 
                    src={InstructionsData[currentStep].image}
                    alt={`Image for step ${currentStep + 1}`}
                    className='instructions__image'
                    sizes='100vw'
                />
            </div>
        </div>
    )
}

export default Instructions