// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

const likes = require('../utils/for_testing').likes


describe('should return correct text when', () => {

    test('no names in the array', () => {
        expect(likes([])).toBe('no one likes this')
    })

    test('one name in the array', () => {
        expect(likes(['Peter'])).toBe('Peter likes this')
    })

    test('two names in the array', () => {
        expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
    })

    test('three names in the array', () => {
        expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
    })

    test('four names in the array', () => {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this')
    })

})
    
  