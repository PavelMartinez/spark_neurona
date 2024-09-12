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
        // appearance,
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
                                            { title: 'Dashboard', href: "/account" },
                                            { title: 'Buy coins', href: "/account/buy" },
                                            { title: 'Tariff ' + params.tariff, href: "/account/buy/" + params.tariff },
                                            { title: 'Stripe' }
                                        ]} 
                                        className='breadcrump__component'/>
                                </div>
                                <div className="buy__heading">
                                    <h3 className='buy__heading-h3'>
                                        buy coins
                                        <Link className="account__back" href={`/account/buy/${params.tariff}`}>
                                            <IconArrowUpRight size='20'/>
                                        </Link>
                                        </h3>
                                    <div className="buy__heading-description">
                                        Enter your credentials
                                    </div>
                                </div>
                            </div>
                            <div className="buy-layout">
                                <div className="buy-layout__info">
                                    <div className="buy-layout__info-text">
                                        {t('BuyLayout.info.text')}
                                    </div>
                                    <div className="buy-layout__info-amount">
                                        {format.number(499.9, {style: 'currency', currency: 'RUB'})}
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