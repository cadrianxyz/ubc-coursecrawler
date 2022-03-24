import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Spinner from '../../components/Spinner'
import searchValidator from '../../utils/searchValidator'
import { getCourse } from '../../data/api'

const CourseDetailPage = () => {
  const router = useRouter()
  const { key } = router.query
  
  const [courseText, setCourseText] = useState(key ? key.replace('-', ' ') : key)
  const [courseData, setCourseData] = useState({})
  const [dataLoading, setDataLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)
  
  useEffect(() => {
    (async () => {
      setDataLoading(true)
      const courseKey = searchValidator(key)
      
      if (courseKey) {
        if(courseText !== key) setCourseText(courseKey.replace('-', ' '))
        
        let course = await getCourse(courseKey)
        try { course = JSON.parse(course) }
        catch {}
        console.log({ course })
        setCourseData(course)
        setDataLoaded(true)
      }

      setDataLoading(false)
    })()
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Showing <span className='text-indigo-600'>{courseText}</span></h1>
        </div>
      </header>
      <main className='bg-neutral-100'>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {dataLoading && <div className='w-full h-full'>
                <Spinner />
              </div>}
              {dataLoaded && <div>DATA</div> }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CourseDetailPage
