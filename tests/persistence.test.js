// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

const persistence = require('../utils/for_testing').persistence

describe('times you must multiply the input digits until result in one digit', () => {

    test('39', () => {
        expect(persistence(39)).toBe(3)
    })

    test('999', () => {
        expect(persistence(999)).toBe(4)
    })

    test('4', () => {
        expect(persistence(4)).toBe(0)
    })

})