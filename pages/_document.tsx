import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/font/font.css" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}