// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

const zero = require('../utils/special_for_testing').zero
const one = require('../utils/special_for_testing').one
const two = require('../utils/special_for_testing').two
const three = require('../utils/special_for_testing').three
const four = require('../utils/special_for_testing').four
const five = require('../utils/special_for_testing').five
const six = require('../utils/special_for_testing').six
const seven = require('../utils/special_for_testing').seven
const eight = require('../utils/special_for_testing').eight
const nine = require('../utils/special_for_testing').nine
const plus = require('../utils/special_for_testing').plus
const minus = require('../utils/special_for_testing').minus
const times = require('../utils/special_for_testing').times
const dividedBy = require('../utils/special_for_testing').dividedBy

describe('', () => {

    test('', () => {
        expect(seven(times(five()))).toBe(35)
    })

    test('', () => {
        expect(four(plus(nine()))).toBe(13)
    })

    test('', () => {
        expect(eight(minus(three()))).toBe(5)
    })

    test('', () => {
        expect(six(dividedBy(two()))).toBe(3)
    })

})

