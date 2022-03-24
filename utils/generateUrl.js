const BASE_URL = 'https://courses.students.ubc.ca'
const PAGE_NAME = 'subjarea'
const TABLE_NAME = {
    'DEPARTMENTS': 'subj-all-departments',
    'SUBJECTS_IN_DEPARTMENT': 'subj-department',
    'COURSE': 'subj-course'
}

const generateUrl = (type, dept = '', courseNum = '') => {
    let url = BASE_URL + '/cs/courseschedule?pname=' + PAGE_NAME
    if (type == 'DEPARTMENTS') {
        url += '&tname=' + TABLE_NAME['DEPARTMENTS']
    }
    else if (type == 'SUBJECTS') {
        url += '&tname=' + TABLE_NAME['SUBJECTS_IN_DEPARTMENT']
        url += '&dept=' + dept
    }
    else {
        url += '&tname=' + TABLE_NAME['COURSE']
        url += '&dept=' + dept + '&course=' + courseNum
    }

    return url
}

export default generateUrl
