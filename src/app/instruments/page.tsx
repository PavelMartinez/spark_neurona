import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import InstrumentsGrid from '@/components/Instruments/InstrumentsGrid';

const InstrumentsPage = () => {
  return (
    <Section className="instruments">
        <Flex container className="instruments__inner" direction='column' alignSecondary='center'>
            <h1 className="instruments__heading">
                AI instruments
            </h1>
            <div className="instruments__description">
                <p>
                    Create stunning images with AI-powered technology <br />
                    in seconds.
                </p>
            </div>
            <InstrumentsGrid />
        </Flex>
    </Section>
  )
}

export default InstrumentsPage