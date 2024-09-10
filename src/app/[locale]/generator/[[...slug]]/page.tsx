import Generator from '@/components/Generator/Generator'
import Instructions from '@/components/Instructions/Instructions'
import { Flex, Section } from '@/components/ui/layout'
import { useTranslations } from 'next-intl'
import React from 'react'

const GeneratorPage = ({ params }: { params: { slug: [string, string] } }) => {
    const t = useTranslations("GeneratorPage");
    return (
        <Section 
            className='generator-page'
        >
            <Flex
                container
                className="generator-page__inner"
                alignSecondary='center'
                direction='column'
            >
                <h1 className="generator-page__heading">
                    {t('heading')}
                </h1>
                <div className="generator-page__description">
                    {t('description')}
                </div>
                <div className="generator-page__main">
                    <Generator Category={params.slug[0]} StyleName={params.slug[1]} />
                </div>
            </Flex>
        </Section>
    )
}

export default GeneratorPage;