// Return the most profit from stock quotes.

//  Stock quotes are stored in an array in order of date.
// The stock profit is the difference in prices in buying and selling stock.
// Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing.
// Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.

// @param {array} quotes
// @return {number} max profit

// Example:

//  [ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
//  [ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
//  [ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
//  [ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)

// https://www.codewars.com/kata/597ef546ee48603f7a000057/train/javascript

const getMostProfitFromStockQuotes = require('../utils/for_testing').getMostProfitFromStockQuotes

describe('Return the most profit from stock quotes', () => {

    test('', () => {
        expect(getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ])).toBe(15)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ])).toBe(0)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ])).toBe(18)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2])).toBe(26)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([31,312,3,35,33,3,44,123,126,2,4,1])).toBe(798)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([693,1001,791,270,81,742,488,416,453,226,299,103,506,321,
            632,120,552,988,935,312,1001,430,149,565,268,245,284,582,167,873,230,524,265,785,225,403,
            907,124,926,597,680,743,758,17,721,100,429,430,17,204,191,51,776,96,366,122,445,379,595,
            267,886,416,984,287,512,643,464,166,405,46,412,229,286,944,247,459,279,525,837,153,472,
            556,85,987,38,453,592,168,743,695,647,53,830,182,646,564,595,189,278,107,564,843,467,270,974] )).toBe(55612)
    })

    test('', () => {
        expect(getMostProfitFromStockQuotes([831,606,541,855,157,534,201,558,705,400,956,
    770,703,859,433,435,157,1007,945,755,31,453,439,313,446,
    614,391,273,127,457,303,501,251,493,652,661,169,391,446,
    1008,699,166,809,221,44,220,637,554,554,221,103,423,622,
    571,235,329,514,543,531,717,944,237,974])).toBe(31027)
    })

})