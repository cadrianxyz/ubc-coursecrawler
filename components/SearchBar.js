import { useState } from 'react'
import { useRouter } from "next/router"

import searchValidator from '../utils/searchValidator'

const SearchBar = ({ size = 'small' }) => {
    const [inputText, setInputText] = useState('')
    const [toastOpen, setToastOpen] = useState(false)
    const [isValidating, setIsValidating] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const searchCourse = (e) => {
        e.preventDefault()
        if (isValidating) return
        setIsValidating(true)

        // do validation to get proper key
        const courseKey = searchValidator(inputText)
        if (courseKey != false) {
            router.push(`/course/${courseKey}`)
            setToastOpen(false)
        }
        else setToastOpen(true)

        setIsValidating(false)
    }

    return (
        <div className={size == 'large' ? 'w-full' : ''}>
            {toastOpen && <div className="flex space-x-2 justify-center fixed left-6 bottom-6">
                <div className="shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                    <div className=" bg-red-200 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
                    <p className="font-bold text-gray-500">Input Error!</p>
                    <div className="flex items-center">
                        <button type="button" className=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"
                            onClick={() => { setToastOpen(false) }}>X</button>
                    </div>
                    </div>
                    <div className="p-3 bg-white rounded-b-lg break-words text-gray-700">
                        Enter course code correctly (eg: &apos;CPSC 427&apos;, &apos;CPSC427&apos;)
                    </div>
                </div>
            </div>}

            {size == 'small' && <form className="mt-1 relative rounded-md shadow-sm" onSubmit={searchCourse}>
                <input
                    type="text"
                    name="course-query"
                    id="course-query"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 pt-2 pb-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search (eg: CPSC 427)"
                    onChange={handleChange}
                />
            </form>}
            {size == 'large' && <form className="mt-1 relative rounded-md shadow-lg" onSubmit={searchCourse}>
                <input
                    type="text"
                    name="course-query"
                    id="course-query"
                    className="block w-full pl-7 pr-12 pt-4 pb-4 sm:text-md border-black-300 rounded-md"
                    placeholder="Search for a course (eg: CPSC 427)"
                    onChange={handleChange}
                />
            </form>}
        </div>
    )
}

export default SearchBar