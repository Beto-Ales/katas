// Description:

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = require('../utils/for_testing').arrayDiff

describe('remove values from list a, present in list b keeping their order', () => {

    test('remove one element', () => {
        expect(arrayDiff([1,2],[1])).toStrictEqual([2])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([1,2,2,2,3],[2])).toStrictEqual([1,3])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([1,2,2], [1])).toStrictEqual([2,2])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([1,2,2], [2])).toStrictEqual([1])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([1,2,2], [])).toStrictEqual([1,2,2])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([], [1,2])).toStrictEqual([])
    })

    test('remove one match, many elements', () => {
        expect(arrayDiff([1,2,3], [1,2])).toStrictEqual([3])
    })

})