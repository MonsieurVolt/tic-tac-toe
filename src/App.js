import React, { Component, Fragment } from "react";

import "./App.css";
import GameInterface from "./GameInterface";
import GameTic from "./GameTic";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbPlayer: null,
      player1: {
        symbol: null,
        player: "player1",
      },
      player2: {
        symbol: null,
        player: "player2",
      },
      informationsSecondPlayer: false,
    };
    this.setPlayerSymbol = this.setPlayerSymbol.bind(this);
    this.updateNbPlayer = this.updateNbPlayer.bind(this);
    this.agreement = this.agreement.bind(this);
  }
  agreement() {
    this.setState({
      informationsSecondPlayer: true,
    });
  }
  setPlayerSymbol(player, symbole) {
    this.setState((prev) => {
      return {
        [player]: {
          symbol: symbole,
          player: prev[player].player,
        },
      };
    });

    this.setState((prev) => {
      return {
        player2: {
          symbol: prev.player1.symbol === "$" ? "€" : "$",
          player: prev.player2.player,
        },
      };
    });
  }
  updateNbPlayer(number) {
    console.log(number);
    if (number !== 1 && number !== 2) throw new Error();
    this.setState({
      nbPlayer: number,
    });
  }
  render() {
    const { nbPlayer, player1, player2, informationsSecondPlayer } = this.state;
    console.log(nbPlayer);
    return (
      <Fragment>
        {informationsSecondPlayer ? (
          <GameTic player1={player1} player2={player2} nbPlayer={nbPlayer} />
        ) : (
          <GameInterface
            nbPlayer={nbPlayer}
            UpdateNbPlayer={this.updateNbPlayer}
            player1={player1.symbol}
            setPlayerSymbol={this.setPlayerSymbol}
            player2={player2.symbol}
            agreement={this.agreement}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
