const API_URL = process.env.PUBLIC_API_URL

export const getPopularCourses = async () => {
    try {
        const res = await fetch(API_URL + '/api/courses/popular')
        const courses = await res.json()
        return courses.data
    }
    catch(err) {
        console.error('API ERROR ->>> call for "popular courses" was not a success', err)
    }
}

export const getCourse = async (courseKey) => {
    try {
        const res = await fetch(API_URL + '/api/course/' + courseKey)
        const course = await res.json()
        return course.data
    }
    catch(err) {
        console.error(`API ERROR ->>> call for ${courseKey}  was not a success`, err)
    }
}
