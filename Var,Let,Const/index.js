// Var has function/global scope it can be accessed before declaring  
// Let has block scope which is surrounded by {} they are not hoisted 

// COnst: We cannot reassign value to the const 

// Let example 

let x=10;
{
    let x=3;
}
console.log(x);

// it will print 10

// Const example

var z=10;
{
const z=3;
}
console.log(z) 
// it will print 10;