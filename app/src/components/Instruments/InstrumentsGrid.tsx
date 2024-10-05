import InstrumentsItemProps from '@/typescript/interfaces/Instruments/InstrumentsItemProps'
import InstrumentsData from '@/data/instruments/data'
import React from 'react'
import InstrumentsItem from './InstrumentsItem'

interface InstrumentsGridProps {
    limit?: number;
}

const InstrumentsGrid = ({ limit = 1000 }: InstrumentsGridProps) => {
    return (
        <div className="instruments__grid">
            {InstrumentsData.slice(0, limit).map((value: InstrumentsItemProps, index: number) => (
                <InstrumentsItem
                imageLeft={value.imageLeft} 
                imageRight={value.imageRight} 
                headingText={value.headingText} 
                headingIcon={value.headingIcon} 
                description={value.description} 
                href={value.href}
                key={`instrumentsItem${index}`}/>
            ))}
        </div>
    )
}

export default InstrumentsGrid