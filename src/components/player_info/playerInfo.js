import React, { Component } from "react";
import "./playerInfo.scss";

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      player1: {
        name: "temp",
        color: "green"
      },
      player2: {
        name: "temp",
        color: "green"
      }
    };
  }
  handleChange = e => {
    let player = e.target.id;
    this.setState({
      [player]: {
        ...this.state[player],
        color: e.target.value
      }
    });
  };

  handleInput = e => {
    let player = e.target.name;
    this.setState({
      [player]: {
        // rest operator (...) expands out to:
        ...this.state[player], // x:0, y:0,
        name: e.target.value // overwrites old y
      }
      // radius is not overwritten by setState
    });
  };

  render() {
    return (
      <section id="player-info">
        <div className="player player-1">
          <p>Player1:</p>
          <input
            type="text"
            onChange={this.handleInput}
            name={"player1"}
            value={this.state.player1.name}
          />
          <br />
          <select
            className="select-css"
            onChange={this.handleChange}
            id={"player1"}
          >
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
          <p style={{ backgroundColor: this.state.player1.color }}>
            {this.state.player1.name}
          </p>
        </div>

        <div className="player player-2">
          <p>Player2:</p>
          <input
            type="text"
            onChange={this.handleInput}
            name={"player2"}
            value={this.state.player2.name}
          />
          <br />
          <select
            className="select-css"
            onChange={this.handleChange}
            id={"player2"}
          >
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
          <p style={{ backgroundColor: this.state.player2.color }}>
            {this.state.player2.name}
          </p>
        </div>
        <div className="player-info-btn">
          {" "}
          <a href="#begin">
            <button className="myButton"> Let's Play </button>
          </a>
        </div>
      </section>
    );
  }
}

export default PlayerInfo;
