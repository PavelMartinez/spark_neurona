
import StylesData from '@/data/styles/data'
import React from 'react'
import StylesItem from './StylesItem'
import StylesItemProps from '@/typescript/interfaces/Styles/StylesItemProps';

interface StylesGridProps {
    limit?: number;
}

const StylesGrid = ({ limit = 1000 }: StylesGridProps) => {
    return (
        <div className="styles__grid">
            {StylesData.slice(0, limit).map((value: StylesItemProps, index: number) => (
                <StylesItem
                image={value.image}
                heading={value.heading}
                href={value.href}
                key={`stylesItem${index}`}/>
            ))}
        </div>
    )
}

export default StylesGrid