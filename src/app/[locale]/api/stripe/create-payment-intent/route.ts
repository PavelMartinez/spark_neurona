import TariffData from "@/data/accountBuy/data";
import { localeCurrencies } from "@/data/i18n/localesCurrencies";
import { stripeConnect } from "@/stripe/stripe";
import { LocaleType } from "@/typescript/types/LocaleType";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";


export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { tariff, locale } = data;
    const stripe = await stripeConnect();

    try {
        const thisUser = await currentUser();
        const customer = await stripe.customers.create({
            name: thisUser?.fullName || "No Name",
            email: thisUser?.emailAddresses[0].emailAddress || "No email"
        });
        const currentTariff = await stripe.products.retrieve(tariff, {
            expand: ["default_price", "default_price.currency_options"]
        })
    
        const currencyOptions = (currentTariff.default_price as Stripe.Price).currency_options || null;
        let currency: string = localeCurrencies[locale as LocaleType].toLowerCase() || "usd";
        let amount: string;
        if(currencyOptions && currency in currencyOptions)
        {
            amount = (Number(currencyOptions[currency].unit_amount_decimal) / 100).toFixed(2);
        }
        else {
            amount = (Number((currentTariff.default_price as Stripe.Price).unit_amount_decimal) / 100).toFixed(2);
            currency = "usd";
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: currency,
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                coins: currentTariff.metadata.coins || 30,
                externalId: thisUser?.id || ""
            },
            customer: customer.id || ""
        });

        return NextResponse.json({
            client_secret: paymentIntent.client_secret,
            dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
            amount: {
                value: amount,
                currency: currency
            }
        }, { status: 200 });

    } catch (error: any) {
        console.error(error)
        return new NextResponse(error, {
            status: 400,
        });
    }
}