
// call example----------

let name={
    fname:"prem",
    lname:"kumar",
}
let fullName=function (hometown){
    console.log(this.fname + " " + this.lname + "from"+" " + hometown)
}

fullName.call(name,"ranchi")

let name2={
    fname:"mohan",
    lname:"singh",
}
// borrow fullName function from name object and use it in new object that is name 2
fullName.call(name2, "bangalore")


//Apply --------------------

//when we need to pass multiple arguments while calling function then we use bind function, rest all process are same 
// example--  fullName.bind(name2["ranchi","food","sleep"])



// BIND----------
// we are storing our calling function in a variable , so that variable crrating a copy of our function and it return some value
let bindconcept=fullName.bind(name2("ranchi"))
// we can call this bindconcept methos anytime just by invoking 


// ANother Example-------------------

let person={
    name:"prem",
    gender:"male",
    age:24
}

let student={
    name:"kaju",
    gender:"Female",
    age:23

}

function ChooseCity(city1, city2, city3){
    console.log(city1, city2, city3)

}

function getEmail(){
    return `${this.name} is a ${this.gender} with age of ${this.age}`
}
// CALL FUNCTION--------------------
// console.log(getEmail.call(person))


// APPLY FUNCTION--------------------------
// console.log(ChooseCity.apply(student,["BLR","Ranchi","GUJ","dd"]))


// BIND FUNCTION------------------------
let p = getEmail.bind(person)
console.log(p())