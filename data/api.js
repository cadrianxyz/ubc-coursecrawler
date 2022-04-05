const API_URL = process.env.PUBLIC_API_URL

export const getPopularCourses = async (institution) => {
    try {
        const res = await fetch(`${API_URL}/api/courses/${institution}/popular`)
        const courses = await res.json()
        return courses.data
    }
    catch(err) {
        console.error('API ERROR ->>> call for "popular courses" was not a success', err)
        return false
    }
}

export const getCourse = async (institution, courseKey) => {
    try {
        const res = await fetch(`${API_URL}/api/course/${institution}/${courseKey}`)
        const course = await res.json()
        return course.data
    }
    catch(err) {
        console.error(`API ERROR ->>> call for ${institution}/${courseKey} was not a success`, err)
        return false
    }
}
