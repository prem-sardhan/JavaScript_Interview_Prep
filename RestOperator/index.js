// Destructure example-------------------------------------------------------------------
    // const user = {
    //     name: "prem",
    //     city: "blor",
    //     role:"fsd"
    // }

    // const { name, ...rest }= user
    //     console.log(rest)
        // it print all properties of obj except name\
      

// output {city: 'blor', role: 'fsd'}


// Function example---------------------------------------------------------------

function sum(...nums){
    return nums.reduce((total,num)=>total+num,0)

}
console.log("Total Sum is",sum(100,890,765,76358976897,71257878297))