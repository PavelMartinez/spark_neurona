import React from 'react'
import { Flex, Section } from '../ui/layout'
import {Link} from '@/i18n/routing';
import Image from 'next/image'

import bannerGirl from '../../../public/bannerGirl.jpg'
import { useTranslations } from 'next-intl'

const BannerSection = () => {
    const t = useTranslations('BannerSection');
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
                    <h2 className="banner__heading">{t('heading')}</h2>
                    <div className="banner__description">
                        {t('description')} </div>
                </div>
                <Link href="/" className="banner__button">
                    {t('button')} </Link>
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