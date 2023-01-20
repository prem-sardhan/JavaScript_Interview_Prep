// HOisting is the default behavior of the javascript library that we can get access to any variables or any function before it is invoked 

// Important Hoisting is not applied to LET and const 

console.log(a)
var a=5;
console.log(a)
// THis will print 5 two times 

hello()
function hello() {
    console.log('hello')
}




console.log(b)
let b=10
console.log(b)
// THis will show we can access any variable before initalization 
// and then it will print 11th line also 
// Same is the case with the const also 