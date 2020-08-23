import React, { Fragment } from "react";
import "./InfoToUser.css";
import FragmentInfo from "./FragmentInfo";
function InfoToUser({ turnOf, stopTheGame, computer, player1, restart }) {
  const player = turnOf === "player1" ? "Player 1" : "Player 2";
  let winner = null;
  if (computer && stopTheGame.state) {
    let { reson } = stopTheGame;
    winner = player1.symbol === reson ? "You" : "Computer";
  }

  return (
    <Fragment>
      {stopTheGame.state ? (
        computer ? (
          <FragmentInfo
            stopTheGame={stopTheGame.reson}
            content={`${winner} win !`}
            restart={restart}
          />
        ) : (
          <FragmentInfo
            stopTheGame={stopTheGame.reson}
            content={`${turnOf === "player1" ? "Player 2" : "Player 1"} win!`}
            restart={restart}
          />
        )
      ) : (
        <p className="info_to_user">Turn of {player}</p>
      )}
    </Fragment>
  );
}
export default InfoToUser;
