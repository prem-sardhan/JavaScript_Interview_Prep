function sleep(time){
    return new Promise((resolve,reject)=>{
        if(typeof time==="number"){
            return setTimeout(() => {
                resolve("promise is resolve")
                
            }, 1000);

        }
        reject("Promise is reject")
    })
}

sleep(3000).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})