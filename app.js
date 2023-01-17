/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

/* FIRST ATTEMPT
function filterOutOdds(){
    let nums = Array.prototype.slice.call(arguments)
    return nums.filter((val) => {
    return val % 2 === 0})
}
*/

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

/*
findMin

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1 
*/

/* FIRST ATTEMPT 

let findMin = () => {
    return Math.min(...arguments)
}

*/

const findMin = (...args) => Math.min(...args)

/*mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/

/*
function mergeObjects(obj1, obj2){
    let newObj = {...obj1, ...obj2}
    return newObj
}*/

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

/*doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

*/

let doubleAndReturnArgs = (arr, ...args) => {
    let newArr = [...arr, ...args.map(function(val){
        return val * 2
    })]
    return newArr
}







/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let i = Math.floor(Math.random() * items.length)
    items.splice(i,1)
    return[...items]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    let newArr = [...array1, ...array2]
    return newArr
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj}
    newObj[`${key}`] = val
    return {...newObj}
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = {...obj1, ...obj2}
    return newObj
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}

