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
    this.format = this.state;
    this.setPlayerSymbol = this.setPlayerSymbol.bind(this);
    this.updateNbPlayer = this.updateNbPlayer.bind(this);
    this.agreement = this.agreement.bind(this);
    this.restart = this.restart.bind(this);
  }
  restart() {
    this.setState(this.format);
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
    if (number !== 1 && number !== 2) throw new Error();
    this.setState({
      nbPlayer: number,
    });
  }
  render() {
    const { nbPlayer, player1, player2, informationsSecondPlayer } = this.state;
    return (
      <Fragment>
        {informationsSecondPlayer ? (
          <GameTic
            player1={player1}
            player2={player2}
            nbPlayer={nbPlayer}
            restart={this.restart}
          />
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
