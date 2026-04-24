import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Olive Restaurant Menu",
  description: "Explore our lunch and main menus",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* SKLIK Retargeting code */}
        <Script
          id="sklik-loader"
          strategy="afterInteractive"
          src="https://c.seznam.cz/js/rc.js"
        />
        <Script id="sklik-retargeting" strategy="afterInteractive">
          {`
            window.sznIVA = window.sznIVA || {};
            window.sznIVA.IS = window.sznIVA.IS || { updateIdentities: function(){} };
            window.sznIVA.IS.updateIdentities({
              eid: null
            });
            var retargetingConf = {
              rtgId: 1684248,
              consent: null
            };
            if (window.rc && window.rc.retargetingHit) {
              window.rc.retargetingHit(retargetingConf);
            }
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PB66F29MJ5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PB66F29MJ5');
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18109161014"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18109161014');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2105374600037647');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2105374600037647&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${raleway.className} ${raleway.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
