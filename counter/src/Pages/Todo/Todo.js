import React, { useState } from "react";

function Todo() {
  const [task, settask] = useState("");
  const [data, setdata] = useState([]);
  const handlechange = (e) => {
    console.log(e.target.value);
    settask(e.target.value);
  };
  //  for adding a particular task
  const handleaddtask = () => {
    if (task !== "") {
      setdata([
        ...data,
        {
          id: data.length + 1,
          text: task,
        },
      ]);
    }
    settask("");
  };
  // For deleting a particular task
  const handledelete = (id) => {
    const removeitem = data.filter((el) => {
      return el.id !== id;
    });
    setdata(removeitem);
  };
  console.log(data, "data");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text here"
        name="todo"
        value={task}
        onChange={handlechange}
      />
      <span>
        <button onClick={handleaddtask}>Add</button>
      </span>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            {el.text}{" "}
            <button onClick={() => handledelete(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
