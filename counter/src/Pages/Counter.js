import React from 'react'
import { useState } from 'react'
function Counter() {
  const [count, setcount] = useState(0)
  const handleinc=()=>{
setcount(count+1)
  }
  const handledec=()=>{
    setcount(count-1)
  }
  const handleres=()=>{
    setcount(0)
  }



  return (
    <div>
<h1>A Basic counter app</h1>
    <h1>{count}</h1>
<button onClick={handleinc}>INC</button>
<button onClick={handledec} disabled={count==0}>DEC</button>
<button onClick={handleres}>RESET</button>



    </div>
  )
}

export default Counter