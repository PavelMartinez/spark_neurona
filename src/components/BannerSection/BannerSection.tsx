import React from 'react'
import { Flex, Section } from '../ui/layout'
import Link from 'next/link'
import Image from 'next/image'

import bannerGirl from '../../../public/bannerGirl.jpg'

const BannerSection = () => {
    return (
        <Section className="banner" padding="1200">
            <Flex
                wrap
                container
                className="banner__inner"
                alignPrimary="center"
                direction="column"
            >
                <div className="banner__content">
                    <h2 className="banner__heading">Ai Generated Image</h2>
                    <div className="banner__description">
                        The best AI for generating photos online
                    </div>
                </div>
                <Link href="/" className="banner__button">
                    try for free
                </Link>
                <Image
                    className="banner__image"
                    src={bannerGirl}
                    sizes='100vw'
                    width={182}
                    height={225} 
                    alt=""
                />
                <div className="banner__backdrop"></div>
            </Flex>
        </Section>
    )
}

export default BannerSection