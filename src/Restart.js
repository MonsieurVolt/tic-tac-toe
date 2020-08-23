import React from "react";
import "./Restart.css";
function Restart({ restart }) {
  return (
    <div>
      <button className="restart" onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
}
export default Restart;
