import type { Metadata } from "next";
import "../../styles/sds/index.scss";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "../../styles/index.scss";
import { Footer, Header } from "@/components/ui/compositions";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ClerkProvider } from "@clerk/nextjs";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: "swap"
});

export const metadata: Metadata = {
  title: "Neurona",
  description: "AI Tools"
};

const Muller = localFont({
  variable: '--font-muller',
  display: "swap",
  src: [
    {
      path: '../../fonts/MullerBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    }
  ],
})

const GothamPro = localFont({
  variable: '--font-gotham',
  display: "swap",
  src: [
    {
      path: '../../fonts/GothamPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    }
  ],
})

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  return (
    <ClerkProvider>
      <html lang={locale} className={`${inter.variable} ${GothamPro.variable} ${Muller.variable}`}>
        <head>
          <meta name="robots" content="noindex,nofollow" />
        </head>
        <body>
          <AntdRegistry>
            <NextIntlClientProvider messages={messages}>
                <Header />
                {children}
                <Footer />
            </NextIntlClientProvider>
          </AntdRegistry>
        </body>
      </html>
    </ClerkProvider>

  );
}
