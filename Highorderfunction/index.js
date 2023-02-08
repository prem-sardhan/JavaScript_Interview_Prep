// High order Function :High order functions are function which can operate on other function either by taking them as an argument or by returning them or simply we can say HOF are functions which take Callbackfunction.

// Types of High order functions:
// .map
// .forEach
// .filter
// .reduce 

// Foreach function 

let arr=[1,2,3,4,5,45,23]
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


// Filter function 
function canVote(age){
    return age>=18;
}


let filtered=arr.filter((canVote));
console.log(filtered)

// It also returns the array but a filter array 

// Reduce Function 

function totalSUm(total=0,num){
    return total+num;
}
let sumhai=arr.reduce(totalSUm)
console.log(sumhai)
// It is used when we have to find a single variable it returns a single variable 


// Easy Examples 

const ay=[2,4,6,6,7,7]
// Map function 
const find=ay.map((el)=>{
  return el*2
})
console.log(find)

// For each function 

const hello=ay.forEach((el)=>{
  return el*2
})
console.log(hello)


// Filter FUnction 
const filt=ay.filter((el)=>{
  return el%2==0
})
console.log(filt)

// Reduce Function 

const red=ay.reduce((acc,curr)=>{
return acc+curr
},0)
console.log(red)