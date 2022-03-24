const SearchBar = () => {
    
    return (
        <div>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="course-query"
                    id="course-query"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 pt-2 pb-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search (eg: CPSC 427)"
                />
            </div>
        </div>
    )
}

export default SearchBar