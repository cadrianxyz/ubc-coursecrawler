import { useRouter } from 'next/router'

const CourseDetailPage = () => {
  const router = useRouter()
  const { key } = router.query

  return (
    <>
      <h1>Looking up course: {key}</h1>
    </>
  )
}

export default CourseDetailPage
