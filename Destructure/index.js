// Destructure simply refers to extract out some values from a particular array for example 

let friends=["Nandlal","Dibyanshu","Prem","Aman"]
let [a,b] =friends
console.log(a,b)

// Destucturing a object 

let person={
    name:"Sunil",
    age:34,
    location:"Delhi"
}

let{name,age}=person;
console.log(name,age)