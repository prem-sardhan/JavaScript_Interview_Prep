// Basically constructor function is used to create a object by creating a object with const function it acts like a blueprint we dont need to create the object again and again


function Person(name,age,gender,address){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
}

let Brother=new Person("AMit",23,"Male","Delhi")
let Sister=new Person("Pooja",27,"Female","Delhi")
console.log(Brother)
console.log(Sister)