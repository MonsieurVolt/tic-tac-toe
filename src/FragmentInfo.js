import React from "react";
import Restart from "./Restart";
import "./FragmentInfo.css";
function FragmentInfo({ stopTheGame, content, restart }) {
  return (
    <div className="fragment_info">
      {stopTheGame === "equality" ? (
        <div>
          Equality <Restart restart={restart} />
        </div>
      ) : (
        <div>
          {content}
          <Restart restart={restart} />
        </div>
      )}
    </div>
  );
}
export default FragmentInfo;
