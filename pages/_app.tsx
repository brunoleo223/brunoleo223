import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WNPD65W6' });
  }, []);

  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
