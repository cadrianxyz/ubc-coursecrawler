import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Tree from 'react-d3-tree'
import Link from 'next/link'

import generateUrl from '../../utils/generateUrl'
import Spinner from '../../components/Spinner'
import searchValidator from '../../utils/searchValidator'
import { getCourse } from '../../data/api'

const GROUPS_COLORS = [
  '#4f46e5',
  '#0067ff',
  '#00ccfe',
  '#00f4ab',
  '#d2b834'
]
const NUM_COLORS = 5

const GREY_COLOR = '#999'
const MAIN_COLOR = '#000'

const getNodeStyle = (type = 'circle', color) => {
  if (type == 'text') return {
    fill: color
  }
  else return {
    fill: color,
    stroke: color,
  }
}

const TreeNodeElement = (prop) => {
  const attr = prop.nodeDatum.attributes
  const isCourseNotOffered = attr.offered === 'NOT_OFFERED'
  const isRequired = attr.numRequired === 0
  let color = isCourseNotOffered
    ? GREY_COLOR
    : isRequired || attr.group == null
      ? MAIN_COLOR
      : GROUPS_COLORS[attr.group % NUM_COLORS]

  const hasUnwrappedChildren = prop.nodeDatum.__rd3t.collapsed && prop.nodeDatum.children.length

  return <>
    <circle r="15" style={getNodeStyle('circle', color)} onClick={prop.toggleNode}></circle>
    {hasUnwrappedChildren && <>
      <circle r='2' style={{ transform: 'translateY(6%)', ...getNodeStyle('circle', color) }} />
      <circle r='2' style={{ transform: 'translateY(8%)', ...getNodeStyle('circle', color) }} />
      <circle r='2' style={{ transform: 'translateY(10%)', ...getNodeStyle('circle', color) }} />
    </>}
    <g className='rd3t-label'>
      <text className='rd3t-label__title' textAnchor='start' x='40'>{prop.nodeDatum.name}</text>
      <text className='rd3t-label__attributes'>
      <tspan x='40' dy='1.2em' fill='black'><Link href={generateUrl('COURSE', attr.department, attr.courseNum)}>
        <a target="_blank">View Course Page</a>
      </Link></tspan> 
        {isRequired && <tspan x='40' dy='1.2em'>COURSE REQUIRED</tspan>}
        {!isRequired && attr?.group != null && <><tspan x='40' dy='1.2em'>Prereq(s) Required:</tspan>
        <tspan x='40' dy='1.2em'>&nbsp;&nbsp;&nbsp;&nbsp;{attr.numRequired} from
          <tspan style={getNodeStyle('text', color)}> group {attr.group}</tspan>
        </tspan></>}
      </text>
    </g>
  </>
}

const CourseDetailPage = () => {
  const router = useRouter()
  const { key } = router.query
  
  const [courseText, setCourseText] = useState(key ? key.replace('-', ' ') : key)
  const [courseData, setCourseData] = useState({})
  const [dataLoading, setDataLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [dataError, setDataError] = useState(false)
  
  useEffect(() => {
    (async () => {
      try {
        setDataLoading(true)
        const courseKey = searchValidator(key)
        
        if (courseKey) {
          if(courseText !== key) setCourseText(courseKey.replace('-', ' '))
          
          let course = await getCourse(courseKey)
          if (!course) throw 'response not found'
          try { course = JSON.parse(course) }
          catch {}

          setCourseData(course)
          setDataLoaded(true)
        }

        setDataLoading(false)
      }
      catch(err) {
        console.error('ERROR ->>> could not get list of popular courses', err)
        setDataLoading(false)
        setCourseData({})
        setDataError(true)
      }
    })()
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Showing <span className='text-indigo-600'>{courseText}</span></h1>
          <p className='text-center'>Click on nodes to expand/collapse them!</p>
        </div>
      </header>
      <main className='bg-neutral-100'>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="relative border-4 border-dashed border-gray-200 rounded-lg h-96">
              {dataLoading && <div className='w-full h-full relative'>
                <Spinner center/>
              </div>}
              {dataLoaded && !dataError && <Tree
                data={courseData}
                collapsible={true}
                renderCustomNodeElement={TreeNodeElement}
                orientation='vertical'
                separation={{ nonSiblings: 1, siblings: 2 }}
                depthFactor={200}
                initialDepth={1}
                // shouldCollapseNeighborNodes={true}
                // enableLegacyTransitions={true}
                // transitionDuration={0}
                // centeringTransitionDuration={800}
              /> }
              {dataError && <div className='w-full h-full relative'>
                  <h1 className='text-center'>Data could not be retrieved</h1>
                </div>}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CourseDetailPage
