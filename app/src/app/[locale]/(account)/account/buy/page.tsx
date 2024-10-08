import { ClockCircleIcon, CloseSquareIcon, IncognitoIcon, PromoArrow, SaleIcon, ShieldStarIcon } from '@/components/svg'
import { Flex, FlexItem, Section } from '@/components/ui/layout'
import { Breadcrumb } from 'antd'
import Image from 'next/image'
import React from 'react'

import CalendarImage from '../../../../../../public/Calendar.png'
import EmojiSurpriseImage from '../../../../../../public/EmojiSurprise.png'
import EmojiStarsEyesImage from '../../../../../../public/EmojiStarsEyes.png'
import EmojiStarsImage from '../../../../../../public/EmojiStars.png'
import BigStarsImage from '../../../../../../public/BigStars.png'
import {Link} from '@/i18n/routing';
import { IconArrowUpRight } from '@/components/ui/icons'
import BuyCards from '@/components/BuyCards/BuyCards'
import { LocaleType } from '@/typescript/types/LocaleType'
import { useTranslations } from 'next-intl'
import BuyPromoCard from '@/components/BuyPromoCard/BuyPromoCard'


const BuyPage = ({ params }: { params: { locale: LocaleType; } }) => {
    const t = useTranslations();

    return (
        <>
        <Section className='buy'>
            <Flex
            container
            direction='column'
            className='buy__inner'>
                <div className="buy__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[
                            { title: t('BuyProvidersPage.breadcrump.dashboard'), href: "/account" },
                            { title: t('BuyProvidersPage.breadcrump.buy-coins')}
                        ]}
                            className='breadcrump__component'/>
                    </div>
                    <div className="buy__heading">
                        <h3 className='buy__heading-h3'>
                            {t('BuyProvidersPage.heading')}
                            <Link className="account__back" href="/account">
                                <IconArrowUpRight size='20'/>
                            </Link>
                            </h3>
                        <div className="buy__heading-description">
                            {t('BuyPage.description')}
                        </div>
                    </div>
                </div>
                <section className="buy-discount">
                    <div className="buy-discount__content">
                        <div className="buy-discount__content-heading">
                            {t('BuyPage.discount.heading')}
                        </div>
                        <div className="buy-discount__content-additional">
                            {t('BuyPage.discount.additional')}
                        </div>
                    </div>
                    <button className="buy-discount__button">
                        {t('BuyPage.discount.button')}
                    </button>
                    <Image src={CalendarImage} width={121} height={121} alt="" sizes='100vw' className="buy-discount__image buy-discount__image-calendar" />

                    <Image src={EmojiSurpriseImage} width={103} height={103} alt="" sizes='100vw' className="buy-discount__image buy-discount__image-surprise" />
                </section>
                <BuyCards locale={params.locale} />
                <Flex className="buy-conditions"
                direction='row' wrap>
                    <FlexItem size='major' className='buy-conditions__part'>
                        <div className="buy-conditions__question">
                            {t('BuyPage.conditions.question')}
                        </div>
                        <h2 className="buy-conditions__heading">
                            {t('BuyPage.conditions.heading')}
                        </h2>
                    </FlexItem>
                    <FlexItem size='major' className='buy-conditions__part'>
                        <Flex 
                        className="buy-conditions__list"
                        wrap
                        direction='column'
                        gap='100'>
                            <FlexItem className="buy-conditions__list-item">
                                <div className="buy-conditions__list-item__text">
                                    <h3 className="buy-conditions__list-item__heading">
                                        {t('BuyPage.conditions.list.1.heading')}
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                            {t('BuyPage.conditions.list.1.description')}
                                        </p>
                                    </div>
                                </div>
                                <div className="buy-conditions__icon buy-conditions__icon--shield">
                                    <ShieldStarIcon />
                                </div>
                            </FlexItem>
                            <FlexItem className="buy-conditions__list-item">
                                <div className="buy-conditions__list-item__text">
                                    <h3 className="buy-conditions__list-item__heading">
                                        {t('BuyPage.conditions.list.2.heading')}
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                            {t('BuyPage.conditions.list.2.description')}
                                        </p>
                                    </div>
                                </div>
                                <div className="buy-conditions__icon buy-conditions__icon--incognito">
                                    <IncognitoIcon />
                                </div>
                            </FlexItem>
                            <FlexItem className="buy-conditions__list-item">
                                <div className="buy-conditions__list-item__text">
                                    <h3 className="buy-conditions__list-item__heading">
                                        {t('BuyPage.conditions.list.3.heading')}
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                            {t('BuyPage.conditions.list.3.description')}
                                        </p>
                                    </div>
                                </div>
                                <div className="buy-conditions__icon buy-conditions__icon--close">
                                    <CloseSquareIcon />
                                </div>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                    <Image 
                        src={EmojiStarsEyesImage}
                        alt=""
                        width={115}
                        height={115}
                        sizes='100vw'
                        className='buy-conditions__image buy-conditions__image-starseyes'
                    />
                    <Image 
                        src={EmojiStarsImage}
                        alt=""
                        width={42}
                        height={42}
                        sizes='100vw'
                        className='buy-conditions__image buy-conditions__image-stars'
                    />
                </Flex>
                <Flex className="buy-promo"
                direction='row' wrap alignPrimary='space-between'>
                    <FlexItem size='major' className="buy-promo__part">
                        <div className="buy-promo__content">
                        <div className="buy-promo__badge">
                            <div className="buy-promo__badge-icon">
                                <SaleIcon />
                            </div>
                            <div className="buy-promo__badge-text">
                                {t('BuyPage.promo.badge.text')}
                            </div>
                        </div>
                            <h2 className="buy-promo__heading">
                                <span className="buy-promo__heading-text">
                                    {t('BuyPage.promo.heading.text.1')}
                                </span>
                                <span className="buy-promo__heading-text buy-promo__heading-text--accent">
                                    <p>{t('BuyPage.promo.heading.text.accent')}</p>
                                </span>
                                <span className="buy-promo__heading-text">
                                    {t('BuyPage.promo.heading.text.2')}
                                </span>
                            </h2>
                        </div>
                    </FlexItem>
                    <FlexItem size='major' className="buy-promo__part">
                        <BuyPromoCard locale={params.locale} />
                    </FlexItem>
                    <div className="buy-promo__arrow">
                        <PromoArrow />
                    </div>
                    <Image 
                        src={BigStarsImage}
                        alt=""
                        width={181}
                        height={181}
                        sizes='100vw'
                        className='buy-promo__image'
                    />
                </Flex>
            </Flex>
        </Section>
        </>
    )
}

export default BuyPage