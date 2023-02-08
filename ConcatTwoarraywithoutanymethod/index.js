const arr=[1,2,3,4,5,6,7]
const arr2=["amit","nitin","khurrana","sumit"]

let naya=arr.concat(arr2)
console.log(naya)


const nayahai=[...arr,...arr2]
console.log(nayahai)


// Concat two arrays wITHOUT spread or rest operator 

const final=[]
for (let i = 0; i < arr.length; i++) {
    
    final.push(arr[i])
}

for (let i = 0; i < arr2.length; i++) {
    final.push(arr2[i])
   
    
}
console.log(final)