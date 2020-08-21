import React from "react";
import "./AnnouncePlayer.css";
function AnnouncePlayer({ content, symbol, onClick }) {
  const style = {};
  if (symbol === "€") style.color = " rgb(245, 0, 233)";
  else if (symbol === "$") style.color = "blue";
  return (
    <div className="announce">
      <p>
        The {content} symobol's is <br />
        <span style={style} className="announce_symbol">
          {symbol}
        </span>
      </p>
      <button onClick={() => onClick()}>OK</button>
    </div>
  );
}
export default AnnouncePlayer;
