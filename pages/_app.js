import { useState, useEffect } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import Header from '../components/header/index'
import '../styles/globals.css'

import { getPopularCourses } from '../data/api'

// framer example: https://github.com/james-wallis/wallis.dev/blob/master/pages/_app.tsx

const MyApp = ({ Component, pageProps }) => {

  // get popular courses
  const [popularCoursesLoaded, setPopularCoursesLoaded] = useState(false)
  const [popularCourses, setPopularCourses] = useState([])

  useEffect(async () => {
    try {
      const response = await getPopularCourses()
      const validatedResponse = response.map(([course, count]) => {
        const splitted = course.split('-')
        return {
          key: course,
          dept: splitted[0],
          courseNum: splitted[1],
          text: splitted.join(' '),
          href: `/course/${course}`
        }
      })
      setPopularCourses(validatedResponse)
      setPopularCoursesLoaded(true)
    }
    catch(err) {
      console.error('ERROR ->>> could not get list of popular courses', err)
      setPopularCoursesLoaded(false)
    }
  }, [])

  return (
    <div className='MainLayout'>
      <Head>
        {/* TODO: favicon */}
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
      <Header popularCourses={popularCourses} dataLoaded={popularCoursesLoaded} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
