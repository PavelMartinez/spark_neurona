import { EmojiFire } from '@/components/svg'
import { Flex, Section } from '@/components/ui/layout'
import { Breadcrumb } from 'antd'
import React from 'react'
import tariffsData from '@/data/accountBuy/data'

import {Link} from '@/i18n/routing';
import { IconArrowUpRight } from '@/components/ui/icons'
import StripeLogo from '../../../../../../../public/StripeLogo.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface BuyProvidersItemProps {
    image: any;
    discount?: number;
    title: string;
    titleColor: string;
    url: string;
}

const BuyProvidersItem = ({ image, discount = 0, url, title, titleColor = "#FCFCFC" }: BuyProvidersItemProps) => {
    return (
        <Link className="buy-providers__item" href={url}>
            {image}
            <div className="buy-providers__title" style={{ color: titleColor }}>
                {title}
            </div>
            {discount > 0 && 
                <div className="buy-providers__discount">
                    <div className="buy-providers__discount-icon">
                        <EmojiFire />
                    </div>
                    <div className="buy-providers__discount-text">
                        -{Math.abs(discount)}%
                    </div>
                </div>            
            }
        </Link>
    )
}

const BuyProvidersPage = ({ params }: { params: { tariff: string; provider: string; } }) => {
    const t = useTranslations("BuyProvidersPage")
    if(params && !params.tariff)
    {
        return (<>No such tariff</>)
    }
    return (
        <Section className='buy'>
            <Flex
            container
            direction='column'
            className='buy__inner'>
                <div className="buy__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[
                                { title: t('breadcrump.dashboard'), href: "/account" },
                                { title: t('breadcrump.buy-coins'), href: "/account/buy" },
                                { title: t('description') }
                            ]}
                            className='breadcrump__component'
                        />
                    </div>
                    <div className="buy__heading">
                        <h3 className='buy__heading-h3'>
                            {t('heading')}
                            <Link className="account__back" href="/account/buy">
                                <IconArrowUpRight size='20'/>
                            </Link>
                            </h3>
                        <div className="buy__heading-description">
                            {t('description')}
                        </div>
                    </div>
                    <div className="buy-providers">
                        <BuyProvidersItem
                            image={<Image src={StripeLogo} alt="Stripe" sizes='100vw' width={0} height={0} className="buy-providers__image"/>}
                            title={'Stripe'}
                            titleColor={'#6772E5'}
                            discount={40}
                            url={`/account/buy/${params.tariff}/stripe`}
                        />
                    </div>
                </div>
            </Flex>
        </Section>
    )
}

export default BuyProvidersPage