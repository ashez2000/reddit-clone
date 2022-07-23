import type { AppProps } from 'next/app'

import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
