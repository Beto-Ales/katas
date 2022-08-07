// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)

// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

const checkPassword = require('../utils/for_testing').checkPassword

describe('test password', () => {

    test('', () => {
        expect(checkPassword('ABC123abc')).toBe(true)
    })
    test('', () => {
        expect(checkPassword('fkYoWSInz4JF')).toBe(true)
    })
    test('', () => {
        expect(checkPassword('fjd3IR9')).toBe(true)
    })
    test('', () => {
        expect(checkPassword('ghdfj32')).toBe(false)
    })
    test('', () => {
        expect(checkPassword('DSJKHD23')).toBe(false)
    })
    test('', () => {
        expect(checkPassword('dsF43')).toBe(false)
    })
    test('', () => {
        expect(checkPassword('4fdg5Fj3')).toBe(true)
    })
    test('', () => {
        expect(checkPassword('DHSJdhjsU')).toBe(false)
    })
    test('', () => {
        expect(checkPassword('fjd3IR9.;')).toBe(false)
    })
    test('', () => {
        expect(checkPassword('9rk60FHowQ')).toBe(true)
    })
    test('', () => {
        expect(checkPassword('DvgS65306')).toBe(true)
    })

})