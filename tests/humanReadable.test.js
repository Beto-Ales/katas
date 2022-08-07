// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

const humanReadable = require('../utils/for_testing').humanReadable

describe('non-negative integer (seconds) as input', () => {

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(59)).toBe('00:00:59')
    })
    
    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(60)).toBe('00:01:00')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(90)).toBe('00:01:30')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(3599)).toBe('00:59:59')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(3600)).toBe('01:00:00')
    })
    
    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(45296)).toBe('12:34:56')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(86399)).toBe('23:59:59')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(86400)).toBe('24:00:00')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(359999)).toBe('99:59:59')
    })

    test('returns the time in a human-readable format (HH:MM:SS)', () => {
        expect(humanReadable(0)).toBe('00:00:00')
    })

})




// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

// Description:

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


