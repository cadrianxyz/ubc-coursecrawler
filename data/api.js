const API_URL = process.env.PUBLIC_API_URL

export const getPopularCourses = async () => {
    try {
        const res = await fetch(API_URL + '/api/courses/popular')
        const courses = await res.json()
        return courses.data
    }
    catch(err) {
        console.error('API ERROR ->>> call was not a success', err)
    }

}