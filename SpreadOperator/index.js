// Before ES6 version we use to use basically concat method we use this now also not Spread operator is highle preferable

// Concat method it combines the two arrays Example 

let odd=[1,3,5]
let even=[1,2,6,8]

even=even.concat(odd)
console.log(even)


// Spread operator syntax 

let arr=[1,2,3]
let arr2=[4,5,6]
arr=[...arr,...arr2]
console.log(arr)