// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = require('../utils/for_testing').validParentheses

describe('determines if the order of the parentheses is valid', () => {

    test('', () => {
        expect(validParentheses("()")).toBe(true)
    })

    test('', () => {
        expect(validParentheses(")(()))")).toBe(false)
    })

    test('', () => {
        expect(validParentheses("(")).toBe(false)
    })

    test('', () => {
        expect(validParentheses("(())((()())())")).toBe(true)
    })

    test('', () => {
        expect(validParentheses("")).toBe(true)
    })

})
