import React, { Fragment } from "react";
import SymbolChoose from "./SymbolChoose";
import WelcomePage from "./WelcomePage";
import "./AnouncePlayer";
import AnnouncePlayer from "./AnouncePlayer";
function GameInterface({
  nbPlayer,
  UpdateNbPlayer,
  setPlayerSymbol,
  player2,
  agreement,
}) {
  return (
    <Fragment>
      {nbPlayer === null ? (
        <WelcomePage nbPlayer={UpdateNbPlayer} />
      ) : nbPlayer === 1 ? (
        player2 !== "$" && player2 !== "€" ? (
          <SymbolChoose
            contentTitle="Choose Your Symbol"
            setPlayerSymbol={setPlayerSymbol}
            player="player1"
          />
        ) : (
          <AnnouncePlayer
            onClick={agreement}
            content="Computer"
            symbol={player2}
          />
        )
      ) : player2 !== "$" && player2 !== "€" ? (
        <SymbolChoose
          contentTitle="Choose Player 1 Symbol"
          setPlayerSymbol={setPlayerSymbol}
          player="player1"
        />
      ) : (
        <AnnouncePlayer
          onClick={agreement}
          content="Player 2"
          symbol={player2}
        />
      )}
    </Fragment>
  );
}
export default GameInterface;
