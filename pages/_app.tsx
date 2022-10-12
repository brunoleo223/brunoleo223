import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
