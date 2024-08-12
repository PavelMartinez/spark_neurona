import React from 'react'
import { FlexItem } from '../ui/layout';
import Image from 'next/image'
import Link from 'next/link';
import InstrumentsItemProps from '@/typescript/interfaces/Instruments/InstrumentsItemProps';



const InstrumentsItem = ({ imageLeft, imageRight, headingIcon, headingText, description, href }: InstrumentsItemProps) => {
    return (
        <Link className='instruments-item' href={href}>
            <div className="instruments-item__images">
                <Image className="instruments-item__images-item" src={imageLeft} width={0} height={0} sizes="100vw" alt=""/>
                <Image className="instruments-item__images-item" src={imageRight} width={0} height={0} sizes="100vw" alt=""/>
            </div>
            <div className="instruments-item__title">
                <span className="instruments-item__title-icon">
                    {headingIcon}
                </span>
                <span className="instruments-item__title-text">
                    {headingText}
                </span>
            </div>
            <div className="instruments-item__description">
                <p>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default InstrumentsItem