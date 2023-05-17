function Sleep(time){
    return new Promise((resolve,reject)=>{

        if(typeof time==="number"){
            return setTimeout(() => {
                resolve("Promise is solve")
                
            }, 3000);
           
        }
        reject("Promise rejected")


    })

}

Sleep(2000).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})