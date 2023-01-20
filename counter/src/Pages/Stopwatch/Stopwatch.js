import React,{useState,useEffect} from 'react'
import "./Style.css"

function Stopwatch() {

  const [time, settime] = useState(0)
  const [start, setstart] = useState(false)
useEffect(() => {
  let interval=null;
  if(start){
    interval=setInterval(() => {
      settime((prevTime)=>prevTime+10)
    }, 10);
  }else{
    clearInterval(interval);
  }

return ()=>clearInterval(interval)
}, [start])




  
  
  
  return (
    <div>
    <h1>Stopwatch</h1>
    <h1>
<span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
<span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
<span>{("0"+((time/10)%1000)).slice(-2)}</span>


    </h1>

<div>
  <button onClick={()=>setstart(true)}>Start</button>
  <button onClick={()=>setstart(false)}>Stop</button>
  <button onClick={()=>{settime(0);setstart(false)}}>Reset</button>
</div>

    </div>
  )
}

export default Stopwatch