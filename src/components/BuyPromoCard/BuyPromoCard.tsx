import React from 'react'
import { ClockCircleIcon } from '../svg'
import { localeCurrencies } from '@/data/i18n/localesCurrencies'
import { stripeConnect } from '@/stripe/stripe'
import locale from 'antd/es/locale'
import Stripe from 'stripe'
import { LocaleType } from '@/typescript/types/LocaleType'
import { getFormatter, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'

const BuyPromoCard = async ({ locale }: { locale: LocaleType }) => {
    const t = await getTranslations()
    const format = await getFormatter()

    const stripe = await stripeConnect();
    const tariff = (await stripe.products.list({
        expand: ['data.default_price', 'data.default_price.currency_options', 'data.price'],
        active: true,
        limit: 1
    })).data[0];

    const currency: string = localeCurrencies[locale].toLowerCase() || "usd"; // Используем валюту по умолчанию, если нет значения

    const pricesList = (tariff.default_price as Stripe.Price)
    const currencyOptions = pricesList?.currency_options || null;

    let price;
    if(currencyOptions && currency in currencyOptions)
    {
        price = {
            currency,
            value: (Number(currencyOptions[currency].unit_amount_decimal) / 100)
        }
    }
    else {
        price = {
            currency: "usd",
            value: (Number(pricesList.unit_amount_decimal) / 100)
        }
    }

    return (
        <div className="buy-promo__card">
            <div className="buy-promo__card-title">
                <div className="buy-promo__card-title__logo">
                    <ClockCircleIcon />
                </div>
                <div className="buy-promo__card-title__text">
                    {t('BuyPage.promo.card.title')}
                </div>
            </div>
            <div className="buy-promo__card-price">
                <div className="buy-promo__card-price__old">
                    {format.number(price.value*1.2, {style: 'currency', currency: price.currency})}
                </div>
                <div className="buy-promo__card-price__current">
                    <div className="buy-promo__card-price__value">
                        {format.number(price.value*1.2, {style: 'currency', currency: price.currency})}
                    </div>
                    <div className="buy-promo__card-price__currency">
                        {currency.toLocaleUpperCase()}
                    </div>
                </div>
            </div>
            <div className="buy-promo__button-wrapper">
                <Link className="buy-promo__button" href={`/account/buy/${tariff.id}`}>
                    {t('BuyPage.promo.button')}
                </Link>
            </div>
        </div>
    )
}

export default BuyPromoCard