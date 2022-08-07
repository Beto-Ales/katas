// reverse
// string
// console.log(reverse('beto'))   result -> oteb

// ---------------------------------------------------------------------------------------------------------------------------

// average
// array
// console.log(average([1,2,3]))  result -> 2

// ---------------------------------------------------------------------------------------------------------------------------

// convertCamelcase
// string
// console.log(convertCamelcase('hola-que_tal'))  result -> holaQueTal

// ---------------------------------------------------------------------------------------------------------------------------

// arrayDiff
// 2 arrays
// console.log(arrayDiff([1,2,2,2,3], [2])) result ->    [ 1, 3 ]
// console.log(arrayDiff([1,2,2], [1]))     result ->    [ 2, 2 ]
// console.log(arrayDiff([1,2,2], [2]))     result ->    [ 1 ]
// console.log(arrayDiff([], [1,2]))        result ->   []

// ---------------------------------------------------------------------------------------------------------------------------

// order
// string
// console.log(order('ho1la c3omo est2as')) result -> ho1la est2as c3omo

// ---------------------------------------------------------------------------------------------------------------------------

// getSum
// 2 integers
// sum of all the integers between and including them and return it
// console.log(getSum(2,5))   result -> 14
// console.log(getSum(5,2))   result -> 14
// console.log(getSum(-5,2))  result -> -12
// console.log(getSum(5,-2))  result -> 12
// console.log(getSum(5,5))   result -> 0
// console.log(getSum(0,-1))  result -> -1

// ---------------------------------------------------------------------------------------------------------------------------

// solution
// string
// "camelCasing"  result ->  "camel Casing"
// "identifier"   result ->  "identifier"
// ""             result ->  ""

// ---------------------------------------------------------------------------------------------------------------------------

// humanReadable
// non-negative integer
// console.log(humanReadable(59))   result -> 00:00:59
// console.log(humanReadable(60))   result -> 00:01:00
// console.log(humanReadable(90))   result -> 00:01:30
// console.log(humanReadable(3599)) result -> 00:59:59  

// ---------------------------------------------------------------------------------------------------------------------------

// digital_root
// integer
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// ---------------------------------------------------------------------------------------------------------------------------

// persistence
// integer
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// ---------------------------------------------------------------------------------------------------------------------------

// likes
// array of strings
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// ---------------------------------------------------------------------------------------------------------------------------

// validParentheses
// string
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// ---------------------------------------------------------------------------------------------------------------------------

// stripCommentsSolution
// 2 arrays
// console.log(stripCommentsSolution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
// result:
// apples, plums
// pears
// oranges

// ---------------------------------------------------------------------------------------------------------------------------

// checkPassword
// string
// RegExp
// console.log(checkPassword('ABC123abc'))      result -> true  
// console.log(checkPassword('fkYoWSInz4JF'))   result -> true    
// console.log(checkPassword('fjd3IR9'))        result -> true
// console.log(checkPassword('ghdfj32'))        result -> false
// console.log(checkPassword('DSJKHD23'))       result -> false
// console.log(checkPassword('dsF43'))          result -> false
// console.log(checkPassword('4fdg5Fj3'))       result -> true
// console.log(checkPassword('DHSJdhjsU'))      result -> false  
// console.log(checkPassword('fjd3IR9.;'))      result -> false  
// console.log(checkPassword('9rk60FHowQ'))     result -> true  
// console.log(checkPassword('DvgS65306'))      result -> true  
// console.log(checkPassword('.m<=X,Le7K669e')) result -> false

// ---------------------------------------------------------------------------------------------------------------------------

// cakes
// 2 objects
// returns the maximum number of cakes
// based on goods needed (obj1) and goods available (obj2)

// console.log(cakes({flour: 500, sugar: 200, eggs: 1},
// {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))  result -> 2

// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
// {sugar: 500, flour: 2000, milk: 2000}))           result -> 0


// ---------------------------------------------------------------------------------------------------------------------------

// getMostProfitFromStockQuotes
// array

// Example:

//  getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ])        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
//  getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ])        => 0   (nothing to buy for profit)
//  getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ])       => 18  (buy at 1,6,5 and sell all at 10)
//  getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]) => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)

// ---------------------------------------------------------------------------------------------------------------------------

// findUniq
// array

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// ---------------------------------------------------------------------------------------------------------------------------

// findChildren
// array

// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

// ---------------------------------------------------------------------------------------------------------------------------

// snail
// array

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// ---------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------



// reverse string
const reverse = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}

// console.log(reverse('beto'))   result -> oteb

// average 
const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}

// console.log(average([1,2,3]))  result -> 2

// katas
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// convertCamelcase
const convertCamelcase = (string) => {
  
  if(string.charAt(0) === string.charAt(0).toUpperCase()) {
    return string
        .split(/[-_]+/)
        .map((word) => {
          return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
        })
        .join('')
  }
    return string
        .split(/[-_]+/)
        .map((word, index) => {
          return index === 0 
              ? word.toLowerCase()
              : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
        })
        .join('')
}

// console.log(convertCamelcase('hola-que_tal'))  result -> holaQueTal

// function toCamelCase(str){
//       var regExp=/[-_]\w/ig;
//       return str.replace(regExp,function(match){
//             return match.charAt(1).toUpperCase();
//        });
// }

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

// function toCamelCase(str){
//   return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
// }

// function toCamelCase(str){
//   return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
// }

// function camelize(previous, current, index){
//   return previous + current.capitalizeFirstLetter();
// }

// String.prototype.capitalizeFirstLetter = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }

// function toCamelCase(str){
//   return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
// }

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// arrayDiff
const arrayDiff = (a=[], b) => {

  let result = []
  a.map((element) => {    
    if (!b.includes(element)) {
      result.push(element)
    }    
  })
  return result

  // ---------------------------------------------
  
  // a.map((a,index) => {
  //   b.map(() => {
  //     console.log(a === b && a.splice(index))
  //   })
  // })

  // ---------------------------------------------

  // works
  // const result = a.reduce((previousValue ,currentValue) => {
  //   if (!b.includes(currentValue)) {
  //     previousValue.push(currentValue)
  //   }
  //   return previousValue
  // }, [])

  // console.log(result)

  // ---------------------------------------------

  // works
  // let result = []

  // a.map((element) => {
  //   if (!b.includes(element)) {
  //     result.push(element)
  //   }
  // })

  // console.log(result)

  // ---------------------------------------------

}

// console.log(arrayDiff([1,2,2,2,3], [2]))  result ->    [ 1, 3 ]
// console.log(arrayDiff([1,2,2], [1]))  result ->    [ 2, 2 ]
// console.log(arrayDiff([1,2,2], [2]))  result ->    [ 1 ]
// console.log(arrayDiff([], [1,2])) result ->   []

// arrayDiff([1,2],[1])

// arrayDiff([1,2,2,2,3],[2])

// arrayDiff()

// best solution

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// order
const order = (words) => {

  // array of words
  const arr = words.split(' ')

  // array of numbers in the same order like the array of words
  const num = words.match(new RegExp(/[1-9]/g))

  // console.log(arr)
  // console.log(num)

  const sortedArr = []

  // check num is not null
  num &&
    num.map((item, index) => {
      // index based on the number - 1 so it starts with index 0
      sortedArr[Number(item) - 1] = arr[index]
    })

  // console.log(sortedArr)

  let result = ''

  sortedArr.map((item) => {
    // create string with all the values sorted
    result += `${item} `
  })

  // console.log(result)

  return result.trim()

}

// console.log(order('ho1la c3omo est2as'))


// best solution
// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }

// (/\d/) check for digits

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// getSum
const getSum = (a,b) => {

  if (a === b) {
    // console.log('result 0')
    return 0
  }

  let minorInt = a < b ? a : b
  let majorInt = a > b ? a : b

  // console.log('minorInt', minorInt)

  let result = 0

  for (let index = minorInt; index < majorInt + 1; index++) {

    // console.log('index', index)
    
    result += minorInt

    ++minorInt
    
  }

  // console.log('result', result)  
  return result

}

// console.log(getSum(2,5))
// console.log(getSum(5,2))
// console.log(getSum(-5,2))
// console.log(getSum(5,-2))
// console.log(getSum(5,5))
// console.log(getSum(0,-1))
// console.log(minorInt)

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// solution
const solution = (string) => {

  // const result = string.replace(/([A-Z])/g, ' $1')
  // console.log(result)
  return string.replace(/([A-Z])/g, ' $1')

}

// solution('bocaJuniorsCampeon')
// solution('camelCasing')
// solution('identifier')
// solution('')

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// humanReadable
const humanReadable = (seconds) => {

  let hs = 0
  let min = 0
  let sec = 0

  // sec = seconds >= 3600 && seconds % 3600 != 0 && seconds % 60 != 0 && seconds % 60
  // sec = seconds < 3600 && seconds % 60 != 0 && seconds % 60
  // sec = seconds < 60 && seconds

  // min = seconds >= 3600 && seconds % 3600 != 0 && Math.floor((seconds % 3600) / 60)

  // hs = seconds >= 3600 && Math.floor(seconds/3600)

  // sec = !sec ? 0 : sec

  // min = !min ? 0 : min

  // hs = !hs ? 0 : hs

  // console.log(Math.floor(seconds/3600))

  if (seconds >= 3600) {
    hs = Math.floor(seconds/3600)
    if (seconds % 3600 != 0) {
      min = Math.floor((seconds % 3600) / 60)
      if (seconds % 60 != 0) {
        sec = seconds % 60
      }
    }
  }
  if (seconds < 3600) {
    min = Math.floor(seconds/60)
    if (seconds % 60 != 0) {
      sec = seconds % 60
    }
  }
  if (seconds < 60) {
    sec = seconds
  }

  hs = hs < 10 ? `0${hs}` : hs
  min = min < 10 ? `0${min}` : min
  sec = sec < 10 ? `0${sec}` : sec

  // console.log(`${hs}:${min}:${sec}`)

  return `${hs}:${min}:${sec}`

  // const result = (Math.floor(3661 / 3600))
  // console.log(result.toString())
  // console.log(3661 % 3600)

}

// console.log(humanReadable(59))
// console.log(humanReadable(60))
// console.log(humanReadable(90))
// console.log(humanReadable(3599))



// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// digital_root
const digital_root = (n) => {
  
  // set result to the input
  let result = n

  // function which takes the partial result until it's 1 digit
  const beto = (x) => {

    // convert number to string
    const n = x.toString()
    // set result
    result = 0
    
    // add every digit to result
    for (let index = 0; index < n.length; index++) {
      result += Number(n[index])
    }

    // if the result of the sum of every digit has 2 or more digits run the function again
    result.toString().length > 1 && beto(result)

  }

  beto(result)

  // return the final result. only 1 digit
  return result

}

// best solution

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }
// --------------------------
// function digital_root(n) {
//   if (n < 10) return n;
  
//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }
// --------------------------
// function digital_root(n) {
//   if (n < 10)
//     return n;

//   for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//     sum += Number(n[i]);
   
//   return digital_root(sum);
// }
// --------------------------
// function digital_root(n){
//     n = eval(n.toString().split('').join('+'));

//     if (n > 9) {
//         return digital_root(n);
//     }

//     return n;
// }
// --------------------------






// digital_root(254)
// console.log('11'.length)

// const arr = n.toString().split(/\d+/g)
//   const arr = n.toString().match(new RegExp(/\d+/g))
//   const arr = n.toString().map((n) => {
//     return console.log(n)
//   })
//   console.log(arr)
  
//   works
//   console.log(n.toString().length)
  

//   const stringNumber = n.toString()
//   let result = n
  

//   works
//   console.log(stringNumber.length)

//   do {
//     for (let index = 0; index < result.toString().length; index++) {

//       result += Number(result.toString()[index])
//       console.log(result)

//     }
//   } while (result.toString().length < 2)
    

//   console.log(result)

//   console.log(Number(n.toString()[0]) + Number(n.toString()[1]))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// persistence
const persistence = (num) => {

  // check input is one digit
  if (num < 10) return 0

  // count times iterated
  let count = 0

  // variable will change through function beto
  let goalOneDigit = num
  
  // recibe partial variable which will be modify by the function
  function beto(xNum) {

    goalOneDigit = xNum.toString().split('').reduce(function (prev, curr) {

      return prev * curr

    }, 1)

    ++count

    // if calculation result is one digit return. else call the function again
    goalOneDigit > 9 && beto(goalOneDigit)

  }

  beto(goalOneDigit)

  return count

}

// console.log(persistence(39))  //  3
// console.log(persistence(999)) //  4
// console.log(persistence(4)) //  0

// best option
// function persistence(num) {
//    var times = 0;
   
//    num = num.toString();
   
//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }
   
//    return times;
// }


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// likes
const likes = (names) => {

  const text = ['likes this', 'like this']

  let result

  if (names.length < 1) {
    result = `no one ${text[0]}`
  }

  if (names.length > 0) {
    result = `${names[0]} ${text[0]}`
  }

  if (names.length > 1) {
    result = `${names[0]} and ${names[1]} ${text[1]}`
  }

  if (names.length > 2) {
    result = `${names[0]}, ${names[1]} and ${names[2]} ${text[1]}`
  }

  if (names.length > 3) {
    result = `${names[0]}, ${names[1]} and ${names.length - 2} others ${text[1]}`
  }

  return result

}

// best solution

// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

// ----------------------------------------------------------------------------

// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }[Math.min(4, names.length)]   //  The Math.min() method returns the number with the lowest value.
// }

// ----------------------------------------------------------------------------

// console.log(likes(['beto','beto','beto','beto','beto','beto']))

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'beto']))




// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// validParentheses
const validParentheses = (parens) => {

  let count = 0

  if (!parens) {
    return true
  }

  for (const char of parens) {
    count += char === '(' ? 1 : -1
    if (count < 0) {
      return false
    }
  }

  return count === 0 ? true : false

}

// best solution

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
  
//   return n == 0;
// }

// console.log(validParentheses('()'))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// stripCommentsSolution
const stripCommentsSolution = (input, markers) => {

  const ridOfGarbageA = input.substring(input.indexOf(0), input.indexOf(markers[0]))
  const ridOfGarbageB = input.toString().substring(input.indexOf('\n'), input.indexOf(markers[1]))

  return `${ridOfGarbageA.trim()}\n${ridOfGarbageB.trim()}`

}

// best solution

// function solution(input, markers) {
//   return input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n')
// }

// console.log(stripCommentsSolution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// checkPassword
const checkPassword = (password) => {

  const regexpTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})((?![^A-Za-z0-9]).)*$/gm

  // it's close but it doesn't cover all the cases
  // const regexpTest = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})((?![^A-Za-z0-9]).)*$/gm

  // i was missing ^
  // my solution would work like that
  // const regexpTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})((?![^A-Za-z0-9]).)*$/gm

  // this is the solution
  // const regexpTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

  return regexpTest.test(password)

}

// console.log(checkPassword('ABC123abc'))
// console.log(checkPassword('fkYoWSInz4JF'))
// console.log(checkPassword('fjd3IR9'))
// console.log(checkPassword('ghdfj32'))
// console.log(checkPassword('DSJKHD23'))
// console.log(checkPassword('dsF43'))
// console.log(checkPassword('4fdg5Fj3'))
// console.log(checkPassword('DHSJdhjsU'))
// console.log(checkPassword('fjd3IR9.;'))
// console.log(checkPassword('9rk60FHowQ'))
// console.log(checkPassword('DvgS65306'))
// console.log('.m<=X,Le7K669e', checkPassword('.m<=X,Le7K669e'))   returns true but should be false
// console.log(checkPassword('.m<=X,Le7K669e'))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// cakes
const cakes = (recipe, available) => {

  let result = []
  
  const recipeArr = Object.keys(recipe)
  const availableArr = Object.keys(available)

  if (recipeArr.length > availableArr.length) {
    return 0
  }

  recipeArr.forEach((key) => {

    result.push(Math.floor(available[key] / recipe[key]))

  })

  return Math.min(...result)

}

// best solution

// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function(val, ingredient) {
//     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//   }, Infinity)  
// }

// ---------------------------------------------

// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

// ---------------------------------------------

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// getMostProfitFromStockQuotes
// array
const getMostProfitFromStockQuotes = (quotes) => {

  // index of the max value of all the quotes
  let indexA = quotes.indexOf(Math.max(...quotes))

  // array container of sub arrays. each sub array is a section starting from index 0 up to index of max value 
  const subArr = [quotes.slice(0 , indexA + 1)]

  // if the max value is the last element in quotes return the final result
  if (indexA === quotes.length - 1) {
    return subArr.filter(arr => arr.length).map(eachArr => 
      eachArr[eachArr.length - 1] * (eachArr.length - 1) - eachArr.reduce((a, b) => a+b) + eachArr[eachArr.length - 1]
    )[0]
  }

  // index of the max value of the next section of elements
  let indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)), indexA + 1)

  // push section from last max value to next max value
  subArr.push(quotes.slice(indexA + 1, indexB + 1))

  // perform this action until the last max value is the last element in quotes
  while (indexB < quotes.length - 1) {

    indexA = indexB

    indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)), indexA + 1)

    subArr.push(quotes.slice(indexA + 1, indexB + 1))
    
  } 

  // map each sub array sections, perform calculation and return final result
  return subArr.filter(arr => arr.length).map(eachArr => 
    eachArr[eachArr.length - 1] * (eachArr.length - 1) - eachArr.reduce((a, b) => a+b) + eachArr[eachArr.length - 1]    
  ).reduce((a, b) => a+b)

}

// best options
// function getMostProfitFromStockQuotes(quotes) {
//   let top=-Infinity;
//   return quotes.reduceRight((p,v)=>{
//     if(top<v) top=v;
//     return p+top-v;
//   }, 0);
// }


// function getMostProfitFromStockQuotes(quotes) {
//   let r = 0, m = 0;
//   for (let i = quotes.length - 1; i >= 0; i--) {
//     r += Math.max(0, m - quotes[i]);
//     m = Math.max(m, quotes[i]);
//   }
//   return r;
// }


// function getMostProfitFromStockQuotes(quotes) {
//   var p = 0
//   var max = quotes[quotes.length-1]
//   for(let i =  quotes.length - 2; i >= 0; i--)
//   {
//     max = Math.max(max,quotes[i])
//     if(quotes[i] < max)
//       p+= max-quotes[i]
//   }
//   return p
// }


// recursion & constructor

// {function Stock(){
//   this.profit = 0
//   this.arr = []
//   this.buy = n => this.arr.push(n)
//   this.sell = n => {
//     this.profit += this.arr.reduce((a, b) => a + n - b, 0)
//     this.arr = []
//   }
// }

// const ƒ =getMostProfitFromStockQuotes= ([n, ...arr], stock = new Stock()) => {
//   if (!n) return stock.profit
//   if (arr.some(i => i > n)) stock.buy(n)
//   if (arr.every(i => i <= n)) stock.sell(n)
//   return ƒ(arr, stock)
// }}



// function getMostProfitFromStockQuotes(quotes) {
//   let results = 0
//   quotes.forEach((buy, BuyIndex) => {
//     let bestPerfForThisTrade = 0;
//     for (i = BuyIndex + 1; i < quotes.length; i++) {
//       let sell = quotes[i];
//       let currentPerf = sell - buy;
//       if (currentPerf > bestPerfForThisTrade) bestPerfForThisTrade = currentPerf;
//     }
//     results += bestPerfForThisTrade;
//   })
//   return results;
// }



// function getMostProfitFromStockQuotes(quotes) {
//   let max = Math.max(...quotes)
//   return quotes.reduce((a,e,i)=>{
//     if(e<max){ return a + max - e }
//     else{
//       max = Math.max(...quotes.slice(i+1))
//       return a
//     }
//   },0)  
// }




// function getMostProfitFromStockQuotes(quotes) {
//   let profit = 0;
//   while(quotes.length>0){
//     let stocks = 0;
//     let investment = 0;
//     let max = Math.max(...quotes);
//     let peakIndex = quotes.indexOf(max);
//     for(let j=0;j<peakIndex;j++){
//       investment += quotes.shift();
//       stocks += 1;
//     }
//     profit += stocks * max - investment;
//     quotes.shift();
//   }
//   return profit;
// }




// const getMostProfitFromStockQuotes = (quotes) => {

//   let sumOfElements = 0

//   // quotes sub array. sections up to max value
//   const result = []

//   const sumOfEachArray = []

//   // max value
//   let maxValue = Math.max(...quotes)

//   // max value index
//   let index = quotes.indexOf(maxValue)

//   // test
//   console.log('index', index)
//   console.log('indexb', quotes.indexOf(Math.max(...quotes)))

//   // console.log(maxValue)

//   // put an array with numbers from index 0 up to max value index + 1 to include the max value number
//   result.push(quotes.slice(0, index + 1))

//   // while (index < (quotes.length - 1)) {
//   //   console.log('beto')
//   //   result.push(quotes.slice(index + 1, quotes.length))
//   //   console.log(result[result.length - 1])
//   //   console.log(result)
//   //   index = result.indexOf(Math.max(...result[result.length - 1]))
//   // }

//   for (let i = 0; i < quotes.length; i++) {
    
//     // fix this statement
//     if(index === quotes.length - 2) {break}

//     result.push(quotes.slice(index + 1, quotes.length))
//     index = quotes.indexOf(Math.max(...result[i + 1]))
//     // console.log('index', index)
//     // console.log('result', result)
//     // console.log('result', result[0].length)
    
//   }

//   for (let index = 0; index < result.length; index++) {
    
//     for (let i = 0; i < result[index].length; i++) {

//       const partialResult = result[index][i] * i - sumOfElements
      
//       sumOfEachArray[i] = sumOfEachArray[i] < partialResult ? partialResult : sumOfEachArray[i]
      
//     }
    
//   }

//   console.log('sumOfEachArray', sumOfEachArray);

//   // if (quotes.indexOf(maxValue) != 0) {
    
//   //   for (let index = 0; index < quotes.indexOf(maxValue) + 1; index++) {
    
//   //     const partialResult = quotes[index] * index - sumOfElements
      
//   //     result[0] = result[0] < partialResult ? partialResult : result[0]

//   //     sumOfElements += quotes[index]
    
//   //   }
    
//   // }  

//   // sumOfElements = 0

//   // for (let index = quotes.indexOf(maxValue) + 1; index < quotes.length; index++) {
    
//   //   const partialResult = quotes[index] * (index - quotes.indexOf(maxValue) - 1) - sumOfElements
    
//   //   result[1] = result[1] < partialResult ? partialResult : result[1]

//   //   sumOfElements += quotes[index]
    
//   // }

//   // return result[0] + result[1] || 0

// }

// console.log(getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ]))

// console.log(getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]))

// console.log(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]))

// console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]))

// console.log(getMostProfitFromStockQuotes([31,312,3,35,33,3,44,123,126,2,4,1]))

// getMostProfitFromStockQuotes([31,312,3,35,33,3,44,123,126,2,4,1]) --------

// explanation
// const beto = (quotes) => {

//   // index of the max value of all the quotes
//   let indexA = quotes.indexOf(Math.max(...quotes))   // 1

//   // console.log('index a', indexA)

//   // array container of sub arrays. each sub array is a section starting from index 0 up to index of max value 
//   const subArr = [quotes.slice(0 , indexA + 1)]   // subArr [ [ 31, 312 ] ]

//   // if the max value is the last element in quotes return the final result
//   if (indexA === quotes.length - 1) {
//     return subArr.map(eachArr => 
//       eachArr[eachArr.length - 1] * (eachArr.length - 1) - eachArr.reduce((a, b) => a+b) + eachArr[eachArr.length - 1]    
//     )[0]
//   }

//   // console.log('subArr', subArr)

//   // index of the max value of the next section of elements
//   let indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)), indexA + 1)   // 8

//   // push section from last max value to next max value
//   subArr.push(quotes.slice(indexA + 1, indexB + 1))

//   // perform this action until the last max value is the last element in quotes
//   do {

//     indexA = indexB

//     indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)), indexA + 1)

//     subArr.push(quotes.slice(indexA + 1, indexB + 1))
    
//   } while (indexB < quotes.length - 1)

//   // map each sub array sections, perform calculation and return final result
//   return subArr.map(eachArr => 
//     eachArr[eachArr.length - 1] * (eachArr.length - 1) - eachArr.reduce((a, b) => a+b) + eachArr[eachArr.length - 1]    
//   ).reduce((a, b) => a+b)

//   // function ends here -----------------------------------------------------



//   // // console.log('index b', indexB)  

//   // // inside loop block
//   // subArr.push(quotes.slice(indexA + 1, indexB + 1))   // subArr updated [ [ 31, 312 ], [ 3,  35,  33, 3, 44, 123, 126 ] ]

//   // // console.log('subArr updated', subArr)

//   // // -------------------------------------------
//   // // -------------------------------------------

//   // indexA = indexB   // 8

//   // // console.log('indexA updated', indexA)

//   // indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)))   // 10

//   // // console.log('indexB updated', indexB)

//   // subArr.push(quotes.slice(indexA + 1, indexB + 1))

//   // // console.log('subArr updated', subArr)   // subArr updated [ [ 31, 312 ], [ 3,  35,  33, 3, 44, 123, 126 ], [ 2, 4 ] ]

//   // // -------------------------------------------
//   // // -------------------------------------------

//   // indexA = indexB   // 10

//   // indexB = quotes.indexOf(Math.max(...quotes.slice(indexA + 1, quotes.length)))   // 11

//   // // console.log('indexA', indexA, 'indexB', indexB, 'quotes.length - 1', quotes.length - 1)   // quotes[last index] 11

  

//   // return subArr.map(eachArr => 
//   //   eachArr[eachArr.length - 1] * (eachArr.length - 1) - eachArr.reduce((a, b) => a+b) + eachArr[eachArr.length - 1]    
//   // ).reduce((a, b) => a+b)

// }

// beto([31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1])
// //     0    1  2   3   4  5   6    7    8  9 10 11 
// //          a                           b     c

// console.log('beto', beto([31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1]))   // 798

// console.log('beto2', beto([693,1001,791,270,81,742,488,416,453,226,299,103,506,321,632,120,552,988,935,312,1001,430,149,565,268,245,284,582,167,873,230,524,265,785,225,403,907,124,926,597,680,743,758,17,721,100,429,430,17,204,191,51,776,96,366,122,445,379,595,267,886,416,984,287,512,643,464,166,405,46,412,229,286,944,247,459,279,525,837,153,472,556,85,987,38,453,592,168,743,695,647,53,830,182,646,564,595,189,278,107,564,843,467,270,974]))   // 55612

// console.log(beto([ 1, 2, 10, 3, 2, 7, 3, 2]))

// console.log(beto([ 1, 2, 3, 4, 5, 6 ]))





// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// array
const findUniq = (arr) => {
  return arr[0] === arr[1] ? arr.filter(x => x != arr[0])[0] : arr[1] === arr[2] ?arr[0] :arr[1]
}

// console.log(findUniq([ 1, 0, 0 ]))
// console.log(findUniq([ 0, 1, 0 ]))
// console.log(findUniq([ 0, 0, 1 ]))
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

// best solution

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// function findUniq(arr) {
//   let [a,b,c] = arr.slice(0,3);
//   if( a != b && a!=c ) return a;
//   for( let x of arr ) if( x!=a ) return x
// }

// function findUniq(arr) {
//   return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
// }

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// array
const findChildren = (dancingBrigade) => {

  const upper = dancingBrigade.split('').sort().filter(char => char === char.toUpperCase())

  return upper.map(upperChar => {

    return`${upperChar}${dancingBrigade.split('').filter(lowerChar => lowerChar === upperChar.toLowerCase()).join('')}`

  }).join('')

}

// best solution

// function findChildren(dancingBrigade){

//   return dancingBrigade.split("")
//                        .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
//                        .join("");
// };



// function findChildren(dancingBrigade){
//   return dancingBrigade.toLowerCase()
//                        .split('')
//                        .sort()
//                        .map((v,i,a)=>{ return (i === 0 || v !== a[i-1]) ? v.toUpperCase() : v;})
//                        .join('');
// };


// const findChildren = dancingBrigade =>
//   [...dancingBrigade].sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`})).join(``);


// function findChildren(dancingBrigade){
//   char = "";
//   let arr = dancingBrigade.toLowerCase().split("").sort().map(item => {
//     if(item != char) {
//       char = item;
//       return item.toUpperCase();
//     }
//     return item;
//   }).join("");

//   return arr;
// };



// console.log(findChildren('beeeEBb'))    // 'BEbbeee'
// console.log(findChildren('beeeEBb'))

// var character = '5';
// if (character == character.toUpperCase()) {
//  alert ('upper case true');
// }
// if (character == character.toLowerCase()){
//  alert ('lower case true');
// }

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// array
const isValidWalk = (walk) => {

  if(walk.length === 10) {

    const Cartesia = [0,0]

    walk.map((directionChar) => {

      switch (directionChar) {
        case 'n':
          Cartesia[0] += 1
          break;

        case 's':
          Cartesia[0] -= 1
          break;

        case 'e':
          Cartesia[1] += 1
          break;

        case 'w':
          Cartesia[1] -= 1
          break;
      
        default:
          break;
      }

    })

    return Cartesia[0] === 0 && Cartesia[1] === 0

  }

  return false

}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))

// best solution

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }


// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

// function isValidWalk(walk) {
//   const north = walk.filter(item => { return item === "n" }).length;
//   const south = walk.filter(item => { return item === "s" }).length;
//   const east = walk.filter(item => { return item === "e" }).length;
//   const west = walk.filter(item => { return item === "w" }).length;
  
//   return walk.length === 10 && north === south && east === west;
// }


// function isValidWalk(walk) {
//   return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
// }


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// array
const snail = (array) => {

  if (!array) {
    return [[]]
  }

  const iterations = array.length * 2 - 1  
  // ---
  let iterate = 0
  // ---
  let rightStart = 0
  let rightEnd = array.length - 1
  // ---
  let downStart = 1
  let downEnd = array.length - 1
  // ---
  let leftStart = 1
  let leftEnd = array.length - 1
  // ---
  let upStart = 1
  let upEnd = array.length - 2
  // ---
  const result = []

  const moveRight = () => {
    array[iterate].map((number, index) => {
      if (index >= rightStart && index <= rightEnd) {
        result.push(number)
      }
    })
    ++rightStart
    --rightEnd
    ++iterate
  }

  const moveDown = () => {
    array.map((subArr, index) => {
      if (index >= downStart && index <= downEnd) {
        result.push(subArr[downEnd])
      }
    })
    ++downStart
    --downEnd
  }

  const moveLeft = () => {
    array[leftEnd].reverse().map((number, index) => {
      if (index >= leftStart && index <= leftEnd) {
        result.push(number)
      }
    })
    array[leftEnd].reverse()
    ++leftStart
    --leftEnd
  }

  const moveUp = () => {
    array.reverse().map((subArr, index) => {
      if (index >= upStart && index <= upEnd) {
        result.push(subArr[upStart - 1])
      }
    })
    array.reverse()
    ++upStart
    --upEnd
  }

  const moveFunctions = [moveRight, moveDown, moveLeft, moveUp]
  let indexCounter = 0

  for (let index = 0; index <= iterations; index++) {
    
    if (indexCounter === 4) {
      indexCounter = 0
    }
    if (index > moveFunctions.length - 1) {
      const func = moveFunctions[indexCounter]
      func()
      ++indexCounter
    }else{
      const func = moveFunctions[index]
      func()
    }    
  }

  return result

}

// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])    // [1, 2, 3, 6, 9, 8, 7, 4, 5]
// console.log('result', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log('result', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// const bestRoute = (cities, costs) => {
  
//   // store indexes
//   const indexes = []
//   const nonMutatingSort = (arr) => {
//     let copy = [...arr];
//     copy.sort((a, b) => {
//        return a - b;
//     })
//     return copy;
//   }
//   // indexes are unique, prevent duplicated
//   // find Notgnihsaw & its index
//   let currentCity = cities.indexOf('Notgnihsaw')    // works console.log(Notgnihsaw) 0
//   // pick cheapest destination other than zero & store index
//     // costs[Notgnihsaw]
//       // find cheapest & index
  
//   // ---------------
  
//   //     costs.forEach(() => {
//   //   // console.log(costs[currentCity].sort((a,b) => {return a - b}))
//   //   // console.log(costs[currentCity].sort((a,b) => {return a - b})[1])
//   //   const nextCity = nonMutatingSort(costs[currentCity])[1]
//   //   // const nextCity = mutable[currentCity].sort((a,b) => {return a - b})[1]    // console.log(nextCity) works
//   //   // costs[currentCity].forEach((cheapest, index) => {
//   //   //   if (cheapest === nextCity) {
//   //   //     currentCity = index
//   //   //     indexes.push(index)
//   //   //   }
//   //   // })
//   //   currentCity = costs[currentCity].findIndex((elemente) => elemente === nextCity)
//   //   indexes.push(currentCity)
//   // })

//   // ---------------

//   for (let index = 0; index < costs.length - 1; index++) {
//     const nextCity = nonMutatingSort(costs[currentCity])[1]
//     currentCity = costs[currentCity].findIndex((elemente) => elemente === nextCity)
//     indexes.push(currentCity)
//   }

//   indexes.push(cities.indexOf('Notgnihsaw'))

//   return indexes.map(index => cities[index])



//   // ensure all the cities where selected (indexes.length === cities.length)
//   // map indexes & use them to select cities
//   console.log(indexes)
// }

// console.log(bestRoute(['Notgnihsaw', 'Berlin', 'Helsinki'], [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]))
// console.log(bestRoute(['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires'], 
//         [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],
//          [3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]))

// ----------

// algorithm

// find Notgnihsaw & index (starting point)   <---
// complete first travel to compare expenses with future travels
// 2d array binding expenses + travel path
// in case of 4 cities
  // 0-1-2-3
    // let's say Notgnihsaw is 1
    // we have to go to:
      // 0-2-3 (excluding 1)
        // 2-3
          // 3
    // & all the combinations
// track the sum of every travel
// in each iteration check if currentExpenses > cheapestExpenses
// pick the path with cheapest expenses

const bestRoute = (cities, costs) => {

  const path = []
  let expenses = 0

  const indexOfNotgnihsaw = cities.indexOf('Notgnihsaw')
  const citiesPath = cities.map((city) => cities.indexOf(city)).filter(index => index != indexOfNotgnihsaw)
  citiesPath.push(indexOfNotgnihsaw)
  // console.log('indexOfNotgnihsaw', indexOfNotgnihsaw, 'citiesPath', citiesPath)

  citiesPath.forEach((destination, index) => {   // citiesPath [ 0, 1, 3, 4, 2 ]
    path.push(cities[destination])
    if (index === 0) {
      expenses += costs[indexOfNotgnihsaw][destination]
    } if (index != 0 && index <= indexOfNotgnihsaw) {
      expenses += costs[index - 1][destination]
    } if (index > indexOfNotgnihsaw) {
      expenses += costs[index][destination]
    }
  })

  console.log('path', path, 'expenses', expenses)
  

}

bestRoute(['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires'], 
        [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],
         [3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]])

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------


module.exports = {
  reverse,
  average,
  convertCamelcase,
  arrayDiff,
  order,
  getSum,
  solution,
  humanReadable,
  digital_root,
  persistence,
  likes,
  validParentheses,
  stripCommentsSolution,
  checkPassword,
  cakes,
  getMostProfitFromStockQuotes,
  findUniq,
  findChildren,
  isValidWalk,
  snail,
  bestRoute,
}