import BannerSection from '@/components/BannerSection/BannerSection'
import BuyCards from '@/components/BuyCards/BuyCards'
import { Flex, Section } from '@/components/ui/layout'
import { useTranslations } from 'next-intl'
import React from 'react'

const PremiumPage = () => {
    const t = useTranslations("PremiumPage")
    return (
        <Section 
            className='premium'
        >
            <Flex
                container
                className="premium__inner"
                alignSecondary='center'
                direction='column'
            >
                <h1 className="premium__heading">
                    {t('heading')}
                </h1>
                <div className="premium__description">
                    {t('description')}
                </div>
                <div className="premium__cards">
                    <BuyCards />
                </div>
                <div className="premium__banner">
                    <BannerSection />
                </div>
            </Flex>
        </Section>
    )
}

export default PremiumPage