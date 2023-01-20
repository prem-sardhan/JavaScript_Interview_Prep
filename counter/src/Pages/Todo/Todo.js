import React,{useState} from 'react'

function Todo() {
  const [task, settask] = useState([])
  const [data, setdata] = useState([])
  const handlechange=(e)=>{
console.log(e.target.value)
settask(e.target.value)

   }
  console.log(task)
  const handleaddtask=()=>{
   setdata(task)
  }
  console.log(data)
  return (
    <div>
<input type="text" placeholder='Enter your text here' name='todo'  onChange={handlechange}/>
<span><button onClick={handleaddtask}>Add</button></span>
<div>
  {
  data?.map((el)=>{
      <p>{el.todo}</p>
  })
}
</div>

    </div>
  )
}

export default Todo