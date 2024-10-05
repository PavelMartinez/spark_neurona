import Instructions from '@/components/Instructions/Instructions'
import { Flex, Section } from '@/components/ui/layout'
import { useTranslations } from 'next-intl'
import React from 'react'

const IosPage = () => {
    const t = useTranslations("IosPage");
    return (
        <Section 
            className='instructions-page'
        >
            <Flex
                container
                className="instructions-page__inner"
                alignSecondary='center'
                direction='column'
            >
                <h1 className="instructions-page__heading">
                    {t('heading')}
                </h1>
                <div className="instructions-page__description">
                    {t('description')}
                </div>
                <div className="instructions-page__main">
                    <Instructions />
                </div>
            </Flex>
        </Section>
    )
}

export default IosPage;