// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = require('../utils/for_testing').solution

describe('break up camel casing, using a space between words', () => {

    test('camelcase word', () => {
        expect(solution('camelCasing')).toBe('camel Casing')
    })

    test('no camelcase word', () => {
        expect(solution('identifier')).toBe('identifier')
    })

    test('empty string', () => {
        expect(solution('')).toBe('')
    })

})