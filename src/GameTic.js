import React, { Component } from "react";
import CaseTic from "./CaseTic";
import "./GameTic.css";
class GameTic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbPlayer: this.props.nbPlayer,
      player1: this.props.player1,
      player2: this.props.player2,
      gameTable: ["", "", "", "", "", "", "", "", ""],
    };
    this.determineTurn = this.determineTurn.bind(this);
    this.setUserSymbol = this.setUserSymbol.bind(this);

    this.computerTurn = this.computerTurn.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.setState({
      turnOf: this.determineTurn(),
    });
  }

  componentDidMount() {
    const { nbPlayer, turnOf } = this.state;
    if (nbPlayer === 1 && turnOf === "player2") {
      this.computerTurn();
    }
  }

  componentDidUpdate() {
    const { nbPlayer, turnOf } = this.state;

    if (nbPlayer === 1 && turnOf === "player2") {
      this.computerTurn();
    }
  }

  determineTurn() {
    const { player1, player2 } = this.state;
    return player1.symbol === "$" ? player1.player : player2.player;
  }
  computerTurn() {
    const { gameTable, player2 } = this.state;
    let random = Math.floor(Math.random() * 9);
    if (gameTable[random] !== "") {
      return this.computerTurn();
    }
    this.setUserSymbol(random, player2.symbol, true);
  }
  setUserSymbol(index, symbol, computer) {
    const { gameTable, nbPlayer, turnOf } = this.state;
    if (nbPlayer === 1 && turnOf === "player2" && !computer) {
      return;
    }
    if (gameTable[index] !== "") return;
    gameTable.splice(index, 1, symbol);

    this.setState({
      gameTable,
    });
    let turn = turnOf === "player1" ? "player2" : "player1";
    this.setState({
      turnOf: turn,
    });
  }
  render() {
    const { gameTable, turnOf, nbPlayer } = this.state;
    const symbol = this.state[turnOf]?.symbol || "";

    const game = gameTable.map((e, index) => (
      <CaseTic
        symbol={e}
        key={index}
        onClick={this.setUserSymbol}
        index={index}
        playerSymbol={symbol}
      />
    ));

    return <div className="game">{game}</div>;
  }
}
export default GameTic;
