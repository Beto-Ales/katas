// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const convertCamelcase = require('../utils/for_testing').convertCamelcase

describe('the method/function converts dash/underscore delimited words into camel casing', () => {

    test('dash delimited words', () => {
        expect(convertCamelcase('boca-juniors')).toBe('bocaJuniors')
    })

    test('underscore delimited words', () => {
        expect(convertCamelcase('boca_juniors')).toBe('bocaJuniors')
    })

    test('first word capitalized if the original word was capitalized', () => {
        expect(convertCamelcase('Boca_juniors')).toBe('BocaJuniors')
    })

    test('capitalized dash delimited words', () => {
        expect(convertCamelcase('BOCA-JUNIORS')).toBe('BocaJuniors')
    })

    test('capitalized underscore delimited words', () => {
        expect(convertCamelcase('BOCA_JUNIORS')).toBe('BocaJuniors')
    })

})

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

// });
// });

// describe("toCamelCase", function() {
//   it ("should handle empty values", function(){
//     Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
//   })
  
//   it ("should remove underscores and convert first letter of word to upper case", function(){
//     Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//     Test.assertEquals(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
//   });
  
//   it ("should remove hyphens and convert first letter of word to upper case", function(){
//     Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//     Test.assertEquals(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
//     Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//     Test.assertEquals(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
//     Test.assertEquals(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
//   });
// });