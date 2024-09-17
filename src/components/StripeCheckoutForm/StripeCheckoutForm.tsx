import React, { EventHandler } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { Button } from "../ui/primitives";
import "./style.scss"
import { IconLoader } from "../ui/icons";
import { Link, usePathname } from "@/i18n/routing";

export default function CheckoutForm({ dpmCheckerLink }: { dpmCheckerLink: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const pathname = usePathname();


  const [message, setMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_URL}${pathname}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
    business: { name: "Neurona" },
  };

  return (
    <>
      <form className="payment-form" onSubmit={handleSubmit}>
        <PaymentElement className="payment-form__element" options={paymentElementOptions} />
        <Button isDisabled={isLoading || !stripe || !elements} className="payment-form__button" type="submit">
          <span className="payment-form__button-text">
            {isLoading ? <IconLoader /> : "Pay now"}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && <div className="payment-form__message">{message}</div>}
      </form>
      {/* [DEV]: For demo purposes only, display dynamic payment methods annotation and integration checker */}
      <div className="payment-form__annotation">
        <p>
          Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
          <Link href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker">Preview payment methods by transaction</Link>
        </p>
      </div>
    </>
  );
}