import React, { useState } from "react";

function Advancetimer() {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleStart = () => {};
  const handleStop = () => {};
  const handleResume = () => {};

  return (
    <div>
      <h2>
        Advance Timer with Start Stop Resume Button and Input which sets time
        according to you
      </h2>

      <h1>Timer:{count}</h1>

      <input
        type="number"
        placeholder="Enter Seconds here"
        onChange={handleChange}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleResume}>Resume</button>
    </div>
  );
}

export default Advancetimer;
