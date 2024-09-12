import TariffData from "@/data/accountBuy/data";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { tariff, locale } = data;
    const currentTariff = TariffData.find((value) => value.id == Number(tariff))
    console.log(currentTariff)
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(currentTariff?.priceCurrent! / 1000),
            currency: "USD",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({
            client_secret: paymentIntent.client_secret,
            dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
         }, { status: 200 });
    } catch (error: any) {
        return new NextResponse(error, {
            status: 400,
        });
    }
}