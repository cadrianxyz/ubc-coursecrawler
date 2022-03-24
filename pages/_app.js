import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import Header from '../components/header'

// framer example: https://github.com/james-wallis/wallis.dev/blob/master/pages/_app.tsx

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='MainLayout'>
      <Head>
          <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
        <DefaultSeo
          titleTemplate="%s - UBC Coursecrawler"
          openGraph={{
              type: 'website',
              locale: 'en_IE',
              // url,
              description: 'Coursecrawler for UBC Courses',
              site_name: 'UBC Coursecrawler | Open Source Project',
              images: [],
          }}
          // canonical={url}
      />
      <Header/>
      <div className='MainContent'>
          <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
