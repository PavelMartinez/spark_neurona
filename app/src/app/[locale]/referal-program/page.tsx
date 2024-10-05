import { Flex } from '@/components/ui/layout'
import { Button, Input } from '@/components/ui/primitives'
import React from 'react'

import EmojiDollarEyesImage from "../../../../public/EmojiDollarsEyes.png"
import EmojiMoneyImage from "../../../../public/EmojiMoney.png"
import EmojiMoneyBagImage from "../../../../public/EmojiMoneyBag.png"
import EmojiStarsImage from "../../../../public/EmojiStars.png"
import Emoji7Image from "../../../../public/Emoji7.png"
import ReferalImage from "../../../../public/ReferalImage.png"
import Image from 'next/image'
import { BigDiamondIcon, CoinIcon, CoinsSmallIcon, DiamondBig2Icon, DiamondBigIcon, DiamondGoldIcon, DiamondIcon, DiamondSmallIcon, LongArrowPath } from '@/components/svg'
import { useFormatter, useTranslations } from 'next-intl'
import { Accordion } from '@/components/Accordion/Accordion'
import { IconCopy } from '@/components/ui/icons'

function ReferalProgramPage() {
    const t = useTranslations()
    const format = useFormatter()
    return (
        <main className='refpage-program'>
            <Flex container className='refpage__inner' direction='column'>
                <section className='refpage-main refpage__section'>
                    <h1 className='refpage-main__heading'>
                        {t('Header.popover.referal-program')}
                    </h1>
                    <div className="refpage-main__description">
                        <p>
                            {t('ReferalProgramPage.main.description')}
                        </p>
                    </div>
                    <Button className="refpage-main__button">
                        {t('ReferalProgramPage.main.button')}
                    </Button>

                    <Image 
                        alt=""
                        src={ReferalImage}
                        width={611}
                        height={956}
                        sizes='100vw'
                        className='refpage-main__image'
                    />

                    <div className="refpage-main__convert">
                        <div className="refpage-main__convert-arrow">
                            <LongArrowPath />
                        </div>
                        <div className="refpage-main__convert-text">
                            {t('AccountConvert.heading')}
                        </div>
                        <div className="refpage-main__course">
                            <span className="refpage-main__course-text">
                                {t('AccountConvert.course-exchange.text')}
                            </span>
                            <span className="refpage-main__course-equation">
                                <span className="account-convert__course-number">
                                    1
                                </span>
                                <span className="account-convert__course-icon refpage-main__course-icon">
                                    <CoinsSmallIcon />
                                </span>
                                <span className="account-convert__course-symbol refpage-main__course-symbol">
                                    =
                                </span>
                                <span className="account-convert__course-number">
                                    2
                                </span>
                                <span className="account-convert__course-icon refpage-main__course-icon">
                                    <DiamondSmallIcon />
                                </span>
                            </span>
                            <Button className="refpage-main__course-button refpage-main__button">
                                {t('AccountConvert.convert.button')}
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="refpage__section refpage-steps">
                    <ul className="refpage-steps__list">
                        <li className="refpage-steps__item">
                            <div className="refpage-steps__item-text">
                                <div className="refpage-steps__index">
                                    01
                                </div>
                                <div className="refpage-steps__heading">
                                    {t('ReferalProgramPage.steps.1.heading')}
                                </div>
                            </div>
                            <div className="refpage-steps__icon">
                                <Image 
                                    alt=""
                                    src={EmojiMoneyImage}
                                    width={76}
                                    height={76}
                                    sizes='100vw'
                                    className='refpage-steps__image refpage-steps__image--money'
                                />
                                <Image 
                                    alt=""
                                    src={EmojiStarsImage}
                                    width={52}
                                    height={50}
                                    sizes='100vw'
                                    className='refpage-steps__image refpage-steps__image--stars'
                                />
                            </div>
                        </li>
                        <li className="refpage-steps__item">
                        <div className="refpage-steps__item-text">
                                <div className="refpage-steps__index">
                                    02
                                </div>
                                <div className="refpage-steps__heading">
                                    {t('ReferalProgramPage.steps.2.heading')}
                                </div>
                            </div>
                            <div className="refpage-steps__icon">
                                <Image 
                                    alt=""
                                    src={EmojiMoneyBagImage}
                                    width={95}
                                    height={92}
                                    sizes='100vw'
                                    className='refpage-steps__image refpage-steps__image--moneybag'
                                />
                            </div>
                        </li>
                        <li className="refpage-steps__item">
                        <div className="refpage-steps__item-text">
                                <div className="refpage-steps__index">
                                    03
                                </div>
                                <div className="refpage-steps__heading">
                                    {t('ReferalProgramPage.steps.3.heading')}
                                </div>
                            </div>
                            <div className="refpage-steps__icon">
                                <Image 
                                    alt=""
                                    src={Emoji7Image}
                                    width={30}
                                    height={30}
                                    sizes='100vw'
                                    className='refpage-steps__image refpage-steps__image--7'
                                />
                                <Image 
                                    alt=""
                                    src={EmojiDollarEyesImage}
                                    width={57}
                                    height={63}
                                    sizes='100vw'
                                    className='refpage-steps__image refpage-steps__image--dollarseyes'
                                />
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="refpage-conditions refpage__section">
                    <h2 className='refpage-conditions__heading'>
                        {t('ReferalProgramPage.conditions.heading')}
                    </h2>
                    <ol className="refpage-conditions__list">
                        <li className="refpage-conditions__item">
                            {t.raw('ReferalProgramPage.conditions.item.1')}
                        </li>
                        <li className="refpage-conditions__item">
                            {t.raw('ReferalProgramPage.conditions.item.2')}
                        </li>
                        <li className="refpage-conditions__item">
                            {t.raw('ReferalProgramPage.conditions.item.3')}
                        </li>
                        <li className="refpage-conditions__item">
                            {t.raw('ReferalProgramPage.conditions.item.4')}
                        </li>
                    </ol>
                    <div className="refpage-card refpage-card--top">
                        <div className="refpage-card__content">
                            <div className="refpage-card__heading">+{format.number(50, {style: 'currency', currency: "USD"})}</div>
                            <div className="refpage-card__description">
                                <span>{t('ReferalProgramPage.card.description')}</span>
                                <b>{format.number(200, {style: 'currency', currency: "USD"})}</b>
                            </div>
                            <div className="refpage-card__email">
                                yourfriend@gmail.com
                            </div>
                        </div>
                        <div className="refpage-card__icon refpage-card__icon--1">
                            <CoinIcon />
                        </div>
                        <div className="refpage-card__icon refpage-card__icon--2">
                            <CoinsSmallIcon />
                        </div>
                    </div>
                    <div className="refpage-card refpage-card--back">
                        <div className="refpage-card__content">
                            <div className="refpage-card__heading">+<b>{format.number(37, {style: 'currency', currency: "USD"})}</b></div>
                            <div className="refpage-card__description">
                                <span>Referal income</span>
                                <b>{format.number(150, {style: 'currency', currency: "USD"})}</b>
                            </div>
                            <div className="refpage-card__email">
                                yourfriend@gmail.com
                            </div>
                        </div>
                        <div className="refpage-card__icon refpage-card__icon--1">
                            <CoinIcon />
                        </div>
                        <div className="refpage-card__icon refpage-card__icon--2">
                            <CoinsSmallIcon />
                        </div>
                    </div>
                    <div className="refpage-conditions__diamond refpage-conditions__diamond--1">
                        <DiamondBigIcon />
                    </div>
                    <div className="refpage-conditions__diamond refpage-conditions__diamond--2">
                        <DiamondBig2Icon />
                    </div>
                </section>
                <section className="refpage-faq">
                    <h2 className="refpage-faq__heading ">{t('HomePage.main-faq.heading')}</h2>
                    <Accordion intlName="main" />
                </section>
                <section className="refpage-conditions refpage__section refpage-join">
                    <h2 className='refpage-conditions__heading'>
                        {t('ReferalProgramPage.join.heading')}
                    </h2>
                    <Button className="refpage-join__button">
                        {t('ReferalProgramPage.join.button')}
                    </Button>
                    <div className="refpage-conditions__diamond refpage-conditions__diamond--2">
                        <DiamondBig2Icon />
                    </div>

                    <div className="refpage-card__icon refpage-join__icon refpage-join__icon--1">
                        <CoinIcon />
                    </div>
                    <div className="refpage-card__icon refpage-join__icon refpage-join__icon--2">
                        <CoinsSmallIcon />
                    </div>

                    <div className="referal__input-group refpage-join__input">
                        <Input className="referal__input" value={"https://art-neurona.com/r/clskcmrbl0k3bcnt5"} readOnly />
                        <button className="referal__input-button">
                            <IconCopy size='24' />
                        </button>
                    </div>
                </section>
            </Flex>
        </main>
    )
}

export default ReferalProgramPage