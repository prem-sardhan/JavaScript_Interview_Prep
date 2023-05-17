let student={
    name:"AMil",
    gender:"Male",
    age:20,

}
let teacher={
    name:"Manvandera",
    gender:"Male",
    age:29,
}

function chooseSubject(sub1,sub2){
    console.log(sub1,sub2);
}

function getEmail(){
    return`${this.name} is a ${this.gender} with ${this.age}`
}


// console.log(getEmail.call(student))
// console.log(getEmail.call(teacher))
console.log(chooseSubject.apply(student,["science","Maths"]))


// It will create a function but that function won't be called
console.log(getEmail.bind(teacher))
// It will give a function in result 





















// I am using that binded function here in simple we are calling it here 
let callfunction =getEmail.bind(teacher)
console.log(callfunction())

// it will give the results here 