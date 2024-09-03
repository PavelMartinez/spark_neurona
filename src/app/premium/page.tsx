import BannerSection from '@/components/BannerSection/BannerSection'
import BuyCards from '@/components/BuyCards/BuyCards'
import { Flex, Section } from '@/components/ui/layout'
import React from 'react'

const PremiumPage = () => {
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
                    Premium
                </h1>
                <div className="premium__description">
                    Choose a tariff tailored to your needs
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