import React from "react";
import "./Style.css";
function Time(props) {
  return (
    <div className="timer">
      <span className="digits">
        {"0" + Math.floor((props.time / 60000) % 60).slice(-2)}:
      </span>

      <span className="digits">
        {"0" + Math.floor((props.time / 1000) % 60).slice(-2)}.
      </span>

      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}

export default Time;
