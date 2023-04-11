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

let final= new Suzuki(4,"sedan")
console.log(final)
final.getCarname()