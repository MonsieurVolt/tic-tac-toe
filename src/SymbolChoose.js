import React from "react";
import "./SymbolChoose.css";
function SymbolChoose({ contentTitle, player, setPlayerSymbol }) {
  return (
    <div className="symbol_choose">
      {contentTitle}
      <div className="symbol_choose_button">
        <button onClick={() => setPlayerSymbol(player, "$")}>$</button>
        <button onClick={() => setPlayerSymbol(player, "€")}>€</button>
      </div>
    </div>
  );
}
export default SymbolChoose;
