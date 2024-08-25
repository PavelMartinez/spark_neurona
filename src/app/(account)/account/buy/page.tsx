import { CheckSquareIcon, ClockCircleIcon, CloseSquareIcon, DiamondGoldIcon, EmojiFire, EmojiRocket, EmojiThumb, IncognitoIcon, PromoArrow, SaleIcon, ShieldStarIcon } from '@/components/svg'
import { Flex, FlexItem } from '@/components/ui/layout'
import { Breadcrumb } from 'antd'
import Image from 'next/image'
import React from 'react'

import CalendarImage from '../../../../../public/Calendar.png'
import EmojiSurpriseImage from '../../../../../public/EmojiSurprise.png'
import EmojiStarsEyesImage from '../../../../../public/EmojiStarsEyes.png'
import EmojiStarsImage from '../../../../../public/EmojiStars.png'
import BigStarsImage from '../../../../../public/BigStars.png'


interface CardsItemProps {
    emoji: any;
    title: string;
    priceCurrent: number;
    priceOld: number;
    diamonds?: number;
    benefits?: string[];
    isPopular?: boolean;
}

const CardsItem = ({ emoji, title, priceCurrent, priceOld, benefits, isPopular = false, diamonds = 15 }: CardsItemProps) => (
    <FlexItem className={`buy-cards__item ${isPopular ? "buy-cards--popular buy-cards__item--border" : ""}`}>
        <div className="buy-cards__info">
            <div className="buy-cards__info-emoji">
                {emoji}
            </div>
            <div className="buy-cards__info-content">
                <div className="buy-cards__title">
                    {title}
                </div>
                <div className="buy-cards__price">
                    <div className="buy-cards__price-current">
                        <div className="buy-cards__price-current__value">
                            {String(priceCurrent).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
                        </div>
                        <div className="buy-cards__price-current__currency">
                            <span>
                                $
                            </span>
                            <span>
                                CAD
                            </span>
                        </div>
                    </div>
                    <div className="buy-cards__price-old">
                        {String(priceOld).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
                    </div>
                </div>
            </div>
        </div>
        <div className="buy-cards__list-wrapper">
            <ul className="buy-cards__list">
                {benefits?.map((s, index) => (
                    <li className="buy-cards__list-item" key={`benefits_${index}`}>
                        <span className="buy-cards__list-item__icon">
                            <CheckSquareIcon />
                        </span>
                        <span className="buy-cards__list-item__text">
                            {s}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="buy-cards__button-wrapper">
            <button className="buy-cards__button">
                CHOOSE PLAN
            </button>
        </div>
        <div className="buy-cards__diamonds">
            <div className="buy-cards__diamonds-icon">
                <DiamondGoldIcon />
            </div>
            <div className="buy-cards__diamonds-counter">
                {diamonds}
            </div>
        </div>
        {isPopular &&
            <div className="buy-cards__popular">
                MOST POPULAR
            </div>
        }
    </FlexItem>
)

const BuyPage = () => {
    return (
        <div className='buy'>
            <Flex
            container
            direction='column'
            className='buy__inner'>
                <div className="buy__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[{ title: 'Dashboard', href: "/account" }, { title: 'Buy coins'}]} className='breadcrump__component'/>
                    </div>
                    <div className="buy__heading">
                        <h3 className='buy__heading-h3'>buy coins</h3>
                        <div className="buy__heading-description">
                            Select your packet
                        </div>
                    </div>
                </div>
                <section className="buy-discount">
                    <div className="buy-discount__content">
                        <div className="buy-discount__content-heading">
                            UP TO 50% DISCOUNT
                        </div>
                        <div className="buy-discount__content-additional">
                            Limited to 50 spots ONLY 
                        </div>
                    </div>
                    <button className="buy-discount__button">
                        get discount
                    </button>
                    <Image src={CalendarImage} width={121} height={121} alt="" sizes='100vw' className="buy-discount__image buy-discount__image-calendar" />

                    <Image src={EmojiSurpriseImage} width={103} height={103} alt="" sizes='100vw' className="buy-discount__image buy-discount__image-surprise" />
                </section>
                <Flex className="buy-cards"
                direction='row' wrap>
                    <CardsItem
                        emoji={<EmojiThumb />}
                        title={'Basic'}
                        priceCurrent={500000}
                        priceOld={600000}
                        benefits={[
                            "$1/image",
                            "4 Requests",
                            "Full results",
                            "No queue"
                        ]}
                        diamonds={8}
                    />

                    <CardsItem
                        emoji={<EmojiRocket />}
                        title={'Basic'}
                        priceCurrent={500000}
                        priceOld={600000}
                        benefits={[
                            "$1/image",
                            "4 Requests",
                            "Full results",
                            "No queue"
                        ]} 
                        isPopular
                    />

                    <CardsItem
                        emoji={<EmojiFire />}
                        title={'Basic'}
                        priceCurrent={500000}
                        priceOld={600000}
                        benefits={[
                            "$1/image",
                            "4 Requests",
                            "Full results",
                            "No queue"
                        ]}
                        diamonds={30}
                    />
                </Flex>
                <Flex className="buy-conditions"
                direction='row' wrap>
                    <FlexItem size='half' className='buy-conditions__part'>
                        <div className="buy-conditions__question">
                            Why choose us?
                        </div>
                        <h2 className="buy-conditions__heading">
                            Comfortable payment conditions
                        </h2>
                    </FlexItem>
                    <FlexItem size='half' className='buy-conditions__part'>
                        <Flex 
                        className="buy-conditions__list"
                        wrap
                        direction='column'
                        gap='100'>
                            <FlexItem className="buy-conditions__list-item">
                                <div className="buy-conditions__list-item__text">
                                    <h3 className="buy-conditions__list-item__heading">
                                        SECURE PAYMENTS
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                        Pay securely with confidence using credit card or crypto. Your bank statement will show &apos;JOYAI&apos;.
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
                                        FULLY ANONYMOUS
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                            We do not track and do not store the images you generate or the prompts you input.
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
                                        NO AUTO-RENEWAL
                                    </h3>
                                    <div className="buy-conditions__list-item__description">
                                        <p>
                                            To ensure you only pay for our product when you&apos;re actually using it, we will not charge you automatically.
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
                    <FlexItem className="buy-promo__part">
                        <div className="buy-promo__content">
                        <div className="buy-promo__badge">
                            <div className="buy-promo__badge-icon">
                                <SaleIcon />
                            </div>
                            <div className="buy-promo__badge-text">
                                Big sale
                            </div>
                        </div>
                            <h2 className="buy-promo__heading">
                                <span className="buy-promo__heading-text">
                                    get extra
                                </span>
                                <span className="buy-promo__heading-text buy-promo__heading-text--accent">
                                    <p>≈ 60% off</p>
                                </span>
                                <span className="buy-promo__heading-text">
                                    with yearly PRO plan!
                                </span>
                            </h2>
                        </div>
                    </FlexItem>
                    <FlexItem className="buy-promo__part">
                        <div className="buy-promo__card">
                            <div className="buy-promo__card-title">
                                <div className="buy-promo__card-title__logo">
                                    <ClockCircleIcon />
                                </div>
                                <div className="buy-promo__card-title__text">
                                    Promo until 31 May
                                </div>
                            </div>
                            <div className="buy-promo__card-price">
                                <div className="buy-promo__card-price__old">
                                    800 000 $ CAD
                                </div>
                                <div className="buy-promo__card-price__current">
                                    <div className="buy-promo__card-price__value">
                                        600 000
                                    </div>
                                    <div className="buy-promo__card-price__currency">
                                        $ CAD
                                    </div>
                                </div>
                            </div>
                            <div className="buy-promo__button-wrapper">
                                <button className="buy-promo__button">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
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
        </div>
    )
}

export default BuyPage