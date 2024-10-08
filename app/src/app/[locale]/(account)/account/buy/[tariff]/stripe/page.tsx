"use client";

import { IconArrowUpRight } from "@/components/ui/icons";
import { Flex, Section } from "@/components/ui/layout";
import { Breadcrumb, Skeleton } from "antd";
import Link from "next/link";
import { Elements } from '@stripe/react-stripe-js';
import { Appearance, loadStripe, StripeElementLocale, StripeElementsOptions } from "@stripe/stripe-js";
import StripeCheckoutForm from "@/components/StripeCheckoutForm/StripeCheckoutForm";
import { useState, useEffect } from "react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import "./style.scss"
import StripeCompletePage from "@/components/StripeCompletePage/StripeCompletePage";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const StripePay = ({ params }: { params: { tariff: number; } }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [dpmCheckerLink, setDpmCheckerLink] = useState("");
    const [confirmed, setConfirmed] = useState<string>("");
    const [amount, setAmount] = useState<{ value: number; currency: string; }>();
    const locale = useLocale();
    const format = useFormatter();
    const t = useTranslations()
  
    useEffect(() => {
      setConfirmed(new URLSearchParams(window.location.search).get("payment_intent_client_secret")!);
    });
  
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: {
            tariff: params.tariff,
            locale
            } }),
        })
        .then((res) => res.json())
        .then((data) => {
            setClientSecret(data.client_secret);
            setAmount(data.amount);

            // [DEV] For demo purposes only
            setDpmCheckerLink(data.dpmCheckerLink);
        });
    }, []);
  
    const appearance: Appearance = {
        theme: 'stripe',
        variables: {
          colorBackground: '#232323',
          colorText: '#fcfcfc'
        },
    };
    const options: StripeElementsOptions = {
        clientSecret: clientSecret,
        locale: locale as StripeElementLocale,
        appearance: appearance
    };

    return (
        <>
            <Section className='buy'>
                <Flex
                    container
                    direction='column'
                    className='buy__inner'
                >
                    <div className="buy__text">
                        <div className="breadcrump">
                            <Breadcrumb items={[
                                    { title: t('BuyProvidersPage.breadcrump.dashboard'), href: "/account" },
                                    { title: t('BuyProvidersPage.breadcrump.buy-coins'), href: "/account/buy" },
                                    { title: t('StripePayment.breadcrump.tariff'), href: "/account/buy/" + params.tariff },
                                    { title: 'Stripe' }
                                ]} 
                                className='breadcrump__component'/>
                        </div>
                        <div className="buy__heading">
                            <h3 className='buy__heading-h3'>
                                {t('BuyProvidersPage.heading')}
                                <Link className="account__back" href={`/account/buy/${params.tariff}`}>
                                    <IconArrowUpRight size='20'/>
                                </Link>
                                </h3>
                            <div className="buy__heading-description">
                                {t('StripePayment.heading.description')}
                            </div>
                        </div>
                    </div>
                    <div className="buy-layout">
                        <div className="buy-layout__info">
                            <div className="buy-layout__info-text">
                                {t('BuyLayout.info.text')}
                            </div>
                            <div className="buy-layout__info-amount">
                                {amount ? format.number(amount.value, {style: 'currency', currency: amount.currency}) : <Skeleton active />}
                            </div>
                        </div>
                        <div className="stripe-payment">
                        {clientSecret ?
                            <Elements stripe={stripePromise} options={options}>
                                {confirmed ? <StripeCompletePage /> : <StripeCheckoutForm dpmCheckerLink={dpmCheckerLink} />}
                            </Elements> :
                            <Skeleton active />
                        }
                        </div>
                    </div>
                </Flex>
            </Section>
        </>
    )
}

export default StripePay;