// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = require('../utils/for_testing').getSum

describe('sum of all the integers between and including the two inputs', () => {

    test('a < b', () => {
        expect(getSum(2, 5)).toBe(14)
    })

    test('a > b', () => {
        expect(getSum(5, 2)).toBe(14)
    })

    test('a === b', () => {
        expect(getSum(5, 5)).toBe(0)
    })

    test('negative integers a < b', () => {
        expect(getSum(-5, 2)).toBe(-12)
    })

    test('negative integers a > b', () => {
        expect(getSum(5, -2)).toBe(12)
    })

    test('negative integers a === b', () => {
        expect(getSum(-2, -2)).toBe(0)
    })

    test('negative result', () => {
        expect(getSum(0,-1)).toBe(-1)
    })

})
