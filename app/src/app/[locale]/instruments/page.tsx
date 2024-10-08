import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import InstrumentsGrid from '@/components/Instruments/InstrumentsGrid';
import { useTranslations } from 'next-intl';

const InstrumentsPage = () => {
    const t = useTranslations("InstrumentsPage");
    return (
    <Section className="instruments">
        <Flex container className="instruments__inner" direction='column' alignSecondary='center'>
            <h1 className="instruments__heading">
                {t('heading')}
            </h1>
            <div className="instruments__description">
                <p>
                    {t('description')}
                </p>
            </div>
            <InstrumentsGrid />
        </Flex>
    </Section>
  )
}

export default InstrumentsPage