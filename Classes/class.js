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

class Suzuki{
  constructor(wheel,type){
  this.wheel=wheel;
  this.type=type;
  }
getCarname(){
  console.log(`Our car has ${this.wheel} wheels and it is a ${this.type}`)
}
}

<<<<<<< HEAD


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
=======
let final= new Suzuki(4,"sedan")
console.log(final)
final.getCarname()
>>>>>>> 6c6377a0ff3bca7aa92781b5214b5b60d59d97e7
