// Infine Currying
// write  a  function where it can add all the parameter together

function add(a){
    return function (b){
        if(b) return add(a + b)
            return a
    }
}

console.log(add(3)(4)(4)(5)(2)()) 