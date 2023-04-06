// closure---  closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 

// 1. print the array element with their index in a list in interval of I*1000

let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    setTimeout(() => {
        console.log(arr[i],i)
        
    }, i*1000);
 
}


//----- OutComes:  inner function settimeout can access the global variable i.e arr, also here let plays a locally scoped varoable

// Alternate solution using var 


// --------------------******----------------------

// let arr=[1,2,3,4,5]

// function display(i){
//     setTimeout(() => {
//         console.log(this[i],i)
        
//     }, i*1000);

// }
// for(var i=0;i<arr.length;i++){
//     display.call(arr,i)
// }






// CLOSURE EXAMPLE-----------
function a(){
    var a =10;
    function b(){
        var b=20;
        function c(){
            console.log(a,b)

        }
        c()
    }
    b()
}
a()



// Closure Simple Example 
function help(){
 var z=4;

 function inn(){
    var z=5
    return z;
 }
 return inn;


}
var callme=help();
console.log(callme())

 setTimeout(() => {
    console.log("hello")
 }, 4000);