// print the given string as key value pair 

// output---{ key: { ' value': { pair: [Object] } } }


let str="key, value,pair,javascript"
let arr=str.split(",")
let obj={}
let rec=(arr,i=0,obj={})=>i===arr.length?obj:{[arr[i]]:rec(arr,i+1)}


console.log(rec(arr))