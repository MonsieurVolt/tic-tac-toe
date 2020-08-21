import React from "react";
function ButtonPlayer({ textContent, onClick, number }) {
  return <button onClick={() => onClick(number)}>{textContent}</button>;
}
export default ButtonPlayer;
