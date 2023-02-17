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


