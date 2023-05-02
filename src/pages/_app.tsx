import RootLayout from '@/components/layout'
import GlobalStyles from '@/components/styled/GlobalStyles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import reduxStore from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
     <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </Head>
     <GlobalStyles />
     <Provider store={reduxStore}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
     </Provider>
    </>
  )
}
