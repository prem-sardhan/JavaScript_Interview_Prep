// High order Function :High order functions are function which can operate on other function either by taking them as an argument or by returning them or simply we can say HOF are functions which take Callbackfunction.

// Types of High order functions:
// .map
// .forEach
// .filter
// .reduce 

// Foreach function 

let arr=[1,2,3,4,5]
arr.forEach((el)=>{
console.log(el)
})
// it doesn't returns a new array 
// it doesn return anything



// Map function 
let newArr=arr.map((el)=>{
    return el*el
})
// It return a new array by transforming that array
console.log(newArr)
console.log(arr)