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
      stopTheGame: { state: false, reson: "" },
    };
    this.determineTurn = this.determineTurn.bind(this);
    this.setUserSymbol = this.setUserSymbol.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
    this.endOfTheGame = this.endOfTheGame.bind(this);
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
    const { nbPlayer, turnOf, stopTheGame } = this.state;

    if (nbPlayer === 1 && turnOf === "player2" && !stopTheGame.state) {
      this.computerTurn();
    }
  }
  findAllPosibilities(array) {
    const posibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let bool = false;
    function contain(array, expect) {
      let result = true;
      expect.forEach((e) => {
        if (array.indexOf(e) === -1) result = false;
      });
      return result;
    }
    posibilities.forEach((pos) => {
      if (contain(array, pos)) {
        bool = true;
      }
    });
    return bool;
  }

  determineTurn() {
    const { player1, player2 } = this.state;
    return player1.symbol === "$" ? player1.player : player2.player;
  }
  endOfTheGame() {
    const { gameTable, endOfTheGame } = this.state;
    const result = { ...endOfTheGame };
    const copy = [...gameTable];
    let clean = 1;
    const arrayOfDol = [];
    const arrayOfEur = [];

    copy.map((elem, index) => {
      if (elem !== "") {
        clean += 1;
        if (elem === "$") {
          console.log(index);
          arrayOfDol.push(index);
        } else if (elem === "€") {
          arrayOfEur.push(index);
        }
      }
    });
    if (clean === 9) {
      result.state = true;
      return result;
    }

    if (this.findAllPosibilities(arrayOfDol)) {
      result.state = true;
      result.reson = "$";
      return result;
    }
    if (this.findAllPosibilities(arrayOfEur)) {
      result.state = true;
      result.reson = "€";
      return result;
    }

    return result;
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
    const { gameTable, nbPlayer, turnOf, stopTheGame } = this.state;
    if (
      (nbPlayer === 1 && turnOf === "player2" && !computer) ||
      gameTable[index] !== "" ||
      stopTheGame.state
    ) {
      return;
    }

    gameTable.splice(index, 1, symbol);

    this.setState({
      gameTable,
    });
    let turn = turnOf === "player1" ? "player2" : "player1";
    this.setState({
      turnOf: turn,
    });
    const giveResult = this.endOfTheGame();
    console.log(giveResult);
    if (giveResult.state) {
      console.log("bof");
      this.setState({
        stopTheGame: giveResult,
      });
    }
  }
  render() {
    const { gameTable, turnOf } = this.state;
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
