// function sleep(time){
//     return new Promise((resolve,reject)=>{
//         if(typeof time==="number"){
//             return setTimeout(() => {
//                 resolve("promise is resolve")
                
//             }, 1000);

//         }
//         reject("Promise is reject")
//     })
// }

// sleep(3000).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// // Another simple Example of Promise 
// let num=5
// let myPromise = new Promise(function(resolve,reject){
// setTimeout(function() {
//     if(num==5){
//         resolve()
//     }
//     else{
// reject();
//     }
// }, 3000);
// })

// myPromise.then(function(){
// console.log("Promise resolved num")
// })
// myPromise.catch(function(){
//     console.log("Promise Rejected")
// })


// simple PROMISE EXAMPLE____-----------------------BASIC PROMISE

let p  = new Promise((res,rej)=>{
    let a =1+1
    if(a=2){
        res("Success after 2 sec")
    }else{
        rej("Failed")
    }
})

p.then((message)=>{
    console.log("This is in then",message)
}).catch((message)=>{
    console.log("This is in catch", message)
})

