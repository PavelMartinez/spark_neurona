import Stripe from "stripe";

const { STRIPE_SECRET_KEY } = process.env;

if (!STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not defined.");

declare global {
  var stripe: {
    object: Stripe | null
  };
}

let cached = global.stripe;

if (!cached) {
  cached = global.stripe = { object: null };
}

export const stripeConnect = async () => {
  if (cached.object) return cached.object;

  cached.object = new Stripe(STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2024-06-20",
  });

  console.log("stripe connected")

  return cached.object;
};