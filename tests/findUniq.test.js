// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

const findUniq = require('../utils/for_testing').findUniq

describe('', () => {

    test('', () => {
        expect(findUniq([ 1, 0, 0 ])).toBe(1)
    })

    test('', () => {
        expect(findUniq([ 0, 1, 0 ])).toBe(1)
    })

    test('', () => {
        expect(findUniq([ 0, 0, 1 ])).toBe(1)
    })

    test('', () => {
        expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toBe(2)
    })

    test('', () => {
        expect(findUniq([ 1, 1, 2, 1, 1 ])).toBe(2)
    })

    test('', () => {
        expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toBe(2)
    })

})