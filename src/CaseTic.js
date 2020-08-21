import React from "react";
import "./CaseTic.css";
function CaseTic({ symbol, onClick, index, playerSymbol }) {
  const style = {};
  let className = "caseTic ";
  if (symbol === "$") className += "dollard";
  else if (symbol === "€") className += "euro";
  switch (index) {
    case 0:
      style.borderTop = "none";
      style.borderLeft = "none";
      break;
    case 1:
      style.borderTop = "none";
      break;
    case 2:
      style.borderTop = "none";
      style.borderRight = "none";
      break;
    case 3:
      style.borderLeft = "none";
      break;
    case 5:
      style.borderRight = "none";
      break;
    case 6:
      style.borderLeft = "none";
      style.borderBottom = "none";
      break;
    case 7:
      style.borderBottom = "none";
      break;
    case 8:
      style.borderRight = "none";
      style.borderBottom = "none";
      break;
    default:
      break;
  }
  return (
    <div
      style={style}
      className={className}
      onClick={() => onClick(index, playerSymbol, false)}
    >
      {symbol}
    </div>
  );
}
export default CaseTic;
