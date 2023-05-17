// An Immediately Invoked Function Expression (IIFE) is a JavaScript design pattern that involves wrapping a function within parentheses and immediately executing it. It is also sometimes referred to as a self-executing anonymous function.

// The primary purpose of an IIFE is to create a new scope for the enclosed code, preventing variable and function name clashes with the global scope or other code. It helps in encapsulating variables and functions and keeping them private within the IIFE.



(function() {
    var name = 'John';
  
    function greet() {
      console.log('Hello, ' + name + '!');
    }
  
    greet();
  })();


// ANOTHER EXAMPLE__________________________________________________

// (function (){
//     var a=10
//     var b=10
//     console.log(a+b)
// })()





  
  