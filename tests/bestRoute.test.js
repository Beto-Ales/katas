//  This Kata will consider the situation of a fictional politician, "The Big Guy", or TBG.

// TBG's close relative, "The Bagman", travels around the world collecting bribes for TBG.
// Because of increased scrutiny, they can no longer use government aircraft to collect the bribes
// so they have to pay for private travel. Any travel costs come out of the total rake,
// so TBG wants to keep travel costs at a minimum.

// Neither TBG nor The Bagman is very good at math,
// so TBG has hired you to write an algorithm to determine the cheapest route for The Bagman to take
// so that he can collect all the bribes.
// The route will always start and end in TBG's home city, Notgnihsaw.
// Your function should return a list of the optimal path,
// in order, starting with the first city The Bagman travels to and ending with Notgnihsaw.
// You will be provided two lists as inputs. The first will be the list of cities that The Bagman must travel to.
// The second will be a 2D list consisting of travel costs from the corresponding city in List 1
// to the various other cities in the order they are given.

// For example, given:
// cities = ['Notgnihsaw', 'Berlin', 'Helsinki']
// costs = [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]
// From Notgnihsaw to Notgnihsaw costs 0, Notgnihsaw to Berlin costs 800, Notgnihsaw to Helsinki costs 1500. From Berlin to Notgnihsaw costs 900, Berlin to Berlin costs 0, Berlin to Helsinki costs 350, etc.

// Note that the cost of travelling from A to B is not necessarily the same as travelling B to A.
// Business is good, so there will always be at least 3 cities in the list (including Notgnihsaw).
// If there are multiple routes tied for the cheapest, any of them can be returned as the correct answer.

// Example:
// cities = ['Notgnihsaw', 'Berlin', 'Helsinki']
// costs = [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]
// returns ['Berlin', 'Helsinki', 'Notgnihsaw']

// cities = ['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires']
// costs = [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],
// [3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]
// returns ['Shenyang', 'Aleppo', 'Vienna', 'Buenos Aires', 'Notgnihsaw']

// Good luck, The Big Guy is counting on you!

// https://www.codewars.com/kata/6297d639de3969003e13e149/train/javascript

const bestRoute = require('../utils/for_testing').bestRoute

describe('', () => {

    test('', () => {
        expect(bestRoute(['Notgnihsaw', 'Berlin', 'Helsinki'],
        [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]])).toStrictEqual(['Berlin', 'Helsinki', 'Notgnihsaw'])
    })

    test('', () => {
        expect(bestRoute(['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires'], 
        [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],
         [3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]))
         .toStrictEqual(['Shenyang', 'Aleppo', 'Vienna', 'Buenos Aires', 'Notgnihsaw'])
    })

})


//  0                            1                            2                          3                           4
//  'Aleppo'                     'Shenyang'                   'Notgnihsaw'               'Vienna'                    'Buenos Aires']
// [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],[3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]
//   0  1     2     3     4       0     1  2     3     4       0     1     2  3    4      0     1     2    3  4       0     1     2     3     4

// keep track of index
// current index 2

// keep track of expenses
// expenses[] (in the end we compare expenses looking for the cheapest)

// have to go to indexes 0-1-3-4

// start at [2] (Notgnihsaw)

// can't go to [2] (Notgnihsaw) until the end