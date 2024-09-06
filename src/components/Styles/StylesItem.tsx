import React from 'react'
import { FlexItem } from '../ui/layout';
import Image from 'next/image'
import Link from 'next/link';
import InstrumentsItemProps from '@/typescript/interfaces/Instruments/InstrumentsItemProps';
import StylesItemProps from '@/typescript/interfaces/Styles/StylesItemProps';



const StylesItem = ({ image, heading, href, nowrap = false, className = "" }: StylesItemProps) => {
    return (
        <Link className={`styles-item ${className}`} href={href}>
            {!nowrap ? 
                <div className="styles-item__image-wrapper">
                    <Image className="styles-item__image" src={image} width={0} height={0} sizes="100vw" alt=""/>
                </div> :
                <Image className="styles-item__image" src={image} width={0} height={0} sizes="100vw" alt=""/>
            }

            {heading && !nowrap &&
                <div className="styles-item__title">
                    {heading}
                </div>
            }
        </Link>
    )
}

export default StylesItem