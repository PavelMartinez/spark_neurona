"use client";

import { IconArrowUpRight } from "@/components/ui/icons";
import { Flex, Section } from "@/components/ui/layout";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { FormEvent, FormEventHandler } from "react";

const StripePay = ({ params }: { params: { tariff: number; } }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
        }

        const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
            return_url: "https://example.com/order/123/complete",
        },
        });


        if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
        } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        }
    };
    return (
        <Section className='buy'>
            <Flex
            container
            direction='column'
            className='buy__inner'>
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
                    <form onSubmit={handleSubmit}>
                        <PaymentElement />
                        <button disabled={!stripe}>Submit</button>
                    </form>
                </div>
            </Flex>
        </Section>
    )
}

export default StripePay;