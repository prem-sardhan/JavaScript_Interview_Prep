import React from 'react'
import { useState } from 'react'
function Counter() {
  const [count, setcount] = useState(0)
  const [ginti, setginti] = useState(0)
  const handleinc=()=>{
setcount(count+1)
  }
  const handledec=()=>{
    setcount(count-1)
  }
  const handleres=()=>{
    setcount(0)
  }

// COde for advanced counter 

  const handleincr=()=>{
  
      }
      const handledecr=()=>{
    
      }
      const handlerese=()=>{
        
      }
  


  return (
    <div>
<h1>A Basic counter app</h1>
    <h1>{count}</h1>
<button onClick={handleinc}>INC</button>
<button onClick={handledec} disabled={count==0}>DEC</button>
<button onClick={handleres}>RESET</button>

<h2>Advance counter where on a button click it should count from 0 to 10 and on clicking it again it should count from 10 to 0.</h2>
<h1>{ginti}</h1>
<button onClick={handleincr}>INC</button>
<button onClick={handledecr} disabled={count==0}>DEC</button>
<button onClick={handlerese}>RESET</button>








    </div>
  )
}

export default Counter