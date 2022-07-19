const reverse = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}

// katas
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

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

// order('ho1la c3omo est2as')


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

module.exports = {
  reverse,
  average,
  convertCamelcase,
  arrayDiff,
  order,
}