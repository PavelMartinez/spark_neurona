import React from "react";
import {
  useStripe,
} from "@stripe/react-stripe-js";
import { useTranslations } from "next-intl";


const InfoIcon = 
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H10C12.2091 14 14 12.2091 14 10V4C14 1.79086 12.2091 0 10 0H4Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H7.25C7.66421 6.25 8 6.58579 8 7V10.5C8 10.9142 7.66421 11.25 7.25 11.25C6.83579 11.25 6.5 10.9142 6.5 10.5V7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z" fill="white"/>
    <path d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z" fill="white"/>
  </svg>;

type StatusContentType = {
    [key: string]: {
        text: string;
    }
}

export default function StripeCompletePage() {
  const stripe = useStripe();

  const [status, setStatus] = React.useState("default");
  const [intentId, setIntentId] = React.useState("");
  const t = useTranslations("StripeCompletePage");


  const STATUS_CONTENT_MAP: StatusContentType = {
    succeeded: {
      text: t('succeeded'),
    },
    processing: {
      text: t('processing'),
    },
    requires_payment_method: {
      text: t('requires_payment_method'),
    },
    default: {
      text: t('default'),
    }
  };

  React.useEffect(() => {
    if (!stripe) {
      return;
    }
    
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }
      
      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id!);
    });
  }, [stripe]);

  return (
    <div id="payment-status">
      <h2 id="status-text">{STATUS_CONTENT_MAP[status].text}</h2>
      {/* {intentId && 
      <div id="details-table">
        <table>
          <tbody>
            <tr>
              <td className="TableLabel">id</td>
              <td id="intent-id" className="TableContent">{intentId}</td>
            </tr>
            <tr>
              <td className="TableLabel">status</td>
              <td id="intent-status" className="TableContent">{status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      } */}
      {intentId && <a href={`https://dashboard.stripe.com/payments/${intentId}`} id="view-details" target="_blank">
        View details
      </a>}
    </div>
  );
}