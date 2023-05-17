// A simple example of class

class UserProfile{
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
//   Adding a method to my object 
 getName(){
    console.log(`Name is ${this.name} and his age is ${this.age}`);
 }


}
let obj=new UserProfile("Amir",34)
obj.getName()




// class person{
//   constructor(city,hobby){
//     this.city=city;
//     this.hobby=hobby;
//   }

//   getDetails(){
//     console.log(`${this.city} ${this.hobby}`)
//   }
// }

// let person1= new person("BLR","Sleep")
// person1.getDetails()


// SIMPLE USING NEW KEYWORD------------------

// function person(name,age){
//   this.name=name,
//   this.age=age
// }

// let p1= new person("prem",24)
// console.log(p1)