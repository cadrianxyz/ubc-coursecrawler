const RE_SPECIAL_CHARS = /[^a-zA-Z0-9 ]/g
const RE_NUMBERS_FOLLOW_LETTERS = /(?<=\D)(?=\d)/

const searchValidator = (input) => {
    // do validation
    let validated = false
    let courseKey = input.trim() // remove trailing whitespace
    courseKey = courseKey.replace(RE_SPECIAL_CHARS, ''); // remove special characters

    let validator = input.split(' ')
    if (validator.length == 2) {
        validated = true
        courseKey = courseKey.replace(' ', '-')
    }
    else {
        const [letters, digits] = courseKey.split(RE_NUMBERS_FOLLOW_LETTERS); // split letters and following numbers
        if (letters && letters.length > 0 && digits && digits.length > 0) {
            validated = true
            courseKey = letters + '-' + digits
        }
    }

    if (validated) return courseKey
    else return validated
}

export default searchValidator