import { LocaleType } from "@/typescript/types/LocaleType";
import local from "next/font/local";

export const localeCurrencies: Record<LocaleType, string> = {
  en: "USD", // English - United States Dollar
  es: "EUR", // Spanish - Euro (Spain) / could be others based on country
  ja: "JPY", // Japanese - Japanese Yene
  tr: "TRY", // Turkish - Turkish Lira
  hi: "INR", // Hindi - Indian Rupee
  zh: "CNY", // Chinese - Chinese Yuan
  pt: "EUR", // Portuguese - Euro (Portugal) / could be BRL (Brazil)
  it: "EUR", // Italian - Euro
  ar: "SAR", // Arabic - Saudi Riyal (or varies by region)
  de: "EUR", // German - Euro
  fr: "EUR", // French - Euro (France)
  id: "IDR", // Indonesian - Indonesian Rupiah
  ko: "KRW", // Korean - South Korean Won
  ru: "RUB",  // Russian - Russian Ruble
};

let locale: LocaleType = "en"
console.log(localeCurrencies[locale])
