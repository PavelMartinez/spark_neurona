import BannerSection from '@/components/BannerSection/BannerSection'
import BuyCards from '@/components/BuyCards/BuyCards'
import Instructions from '@/components/Instructions/Instructions'
import { Flex, Section } from '@/components/ui/layout'
import React from 'react'

const IosPage = () => {
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
                    Neurona App for IOS
                </h1>
                <div className="instructions-page__description">
                    Detailed instructions on how to install the app on IOS
                </div>
                <div className="instructions-page__main">
                    <Instructions />
                </div>
            </Flex>
        </Section>
    )
}

export default IosPage;