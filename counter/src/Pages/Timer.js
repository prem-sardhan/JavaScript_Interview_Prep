
import React,{useState,useEffect} from 'react'

function Timer() {
 const [count,setcount]=useState(0);
 
useEffect(()=>{
const timer=setTimeout(() => {
  setInterval(()=>{
setcount((prevcount)=>prevcount+1)
  },1000)


}, 1000);

const cleanup=()=>{
  clearTimeout(timer)
}
return cleanup;


},[])

   return (
    <div>

<h1>Basic Timer</h1>
<h1>Countdown Timer:{count}</h1>



    </div>
  )
}

export default Timer