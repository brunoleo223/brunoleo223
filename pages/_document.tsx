import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="stylesheet" href="/font/font.css" />
        <link rel="icon" href="/favicon.png" />
        <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-YQC66KC5HP"></Script>
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQC66KC5HP', {page_path: window.location.pathname,});
          `}
        </Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}