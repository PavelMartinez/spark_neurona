import React from 'react'
import { Flex } from '../ui/layout'
import BuyCardsItem from './BuyCardsItem'
import tariffsData from '@/data/accountBuy/data'
import { stripeConnect } from '@/stripe/stripe'
import Stripe from 'stripe'
import { localeCurrencies } from '@/data/i18n/localesCurrencies'
import { LocaleType } from '@/typescript/types/LocaleType'


const BuyCards = async ({ locale = "en" }: { locale: LocaleType }) => {
    const stripe = await stripeConnect();
    const tariffs = (await stripe.products.list({
        expand: ['data.default_price', 'data.default_price.currency_options', 'data.price'],
        active: true
    })).data;

    const currency: string = localeCurrencies[locale].toLowerCase() || "usd"; // Используем валюту по умолчанию, если нет значения
    console.log(tariffs)

    const prices = await Promise.all(
        tariffs.map(async (item) => {
                const pricesList = (item.default_price as Stripe.Price)
                const currencyOptions = pricesList?.currency_options || null;
                if(currencyOptions && currency in currencyOptions)
                {
                    return {
                        currency,
                        value: (Number(currencyOptions[currency].unit_amount_decimal) / 100)
                    }
                }
                else {
                    return {
                        currency: "usd",
                        value: (Number(pricesList.unit_amount_decimal) / 100)
                    }
                }
            })
    )

    return (
        <Flex className="buy-cards"
        direction='row' wrap>
            {tariffs.map((item: Stripe.Product, index) => (
                <BuyCardsItem
                    key={index}
                    id={item.id}
                    emoji={tariffsData[index].emoji}
                    title={item.name}
                    isPopular={index === 1}
                    benefits={item.marketing_features.map((feature) => {
                        return feature.name!
                    })}
                    diamonds={Number(item.metadata.coins) || 0}
                    priceCurrent={prices[index].value}
                    priceOld={Number((prices[index].value * 1.2).toFixed(0))}
                    currency={prices[index].currency}
                />
            ))}
        </Flex>
    )
}

export default BuyCards