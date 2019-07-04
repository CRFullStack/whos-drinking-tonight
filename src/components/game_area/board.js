import React, { Component } from "react";
import PlayerInfo from "../player_info/playerInfo";
import "./boardAlt.scss";

class Board extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      imgsToUse: [
        "https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/iStock_79110987_LARGE_0.jpg?itok=PSdK26iK",
        "http://pngimg.com/uploads/beer/beer_PNG2383.png"
      ],
      randImg1: {
        isFlipped: false,
        img: ""
      },
      randImg2: {
        isFlipped: false,
        img: ""
      },
      randImg3: {
        isFlipped: false,
        img: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      randImg1: {
        img: this.getRandomImg()
      },
      randImg2: {
        img: this.getRandomImg()
      },
      randImg3: {
        img: this.getRandomImg()
      }
    });
  }

  flipIt = event => {
    if (event.currentTarget.id === "randImg3") {
      this.setState({
        randImg3: {
          isFlipped: !this.state.randImg3.isFlipped,
          img: this.getRandomImg()
        }
      });
    }
    if (event.currentTarget.id === "randImg2") {
      this.setState({
        randImg2: {
          isFlipped: !this.state.randImg2.isFlipped,
          img: this.getRandomImg()
        }
      });
    }
    if (event.currentTarget.id === "randImg1") {
      this.setState({
        randImg1: {
          isFlipped: !this.state.randImg1.isFlipped,
          img: this.getRandomImg()
        }
      });
    }
  };

  // we have to make a random img appear on the card on the card each time the browser is reload or a refresh button is clicked
  getRandomImg = () => {
    let img = this.state.imgsToUse[
      Math.floor(Math.random() * this.state.imgsToUse.length)
    ];
    console.log(img);
    return img;
  };

  resetBoard = () => {
    this.setState({
      randImg1: {
        counter: 0,
        img: this.getRandomImg()
      },
      randImg2: {
        counter: 0,
        getImg: this.getRandomImg()
      },
      randImg3: {
        counter: 0,
        getImg: this.getRandomImg()
      }
    });
    console.log("reset values");
  };

  render() {
    return (
      <section id="board">
        <div className="info">
          <PlayerInfo />
        </div>

        <div className="cards">
          <div class="container1" id="begin">
            <div
              className={
                this.state.randImg1.isFlipped ? "card1 flipped" : "card1"
              }
              onClick={this.flipIt}
              id="randImg1"
            >
              <div class="front">Click to flip2</div>
              <div class="back">
                {" "}
                <img
                  className="game-img"
                  src={this.state.randImg1.img}
                  alt="no no no"
                />{" "}
              </div>
            </div>
          </div>
          <div class="container2">
            <div
              className={
                this.state.randImg2.isFlipped ? "card2 flipped" : "card2"
              }
              onClick={this.flipIt}
              id="randImg2"
            >
              <div class="front">Click to flip2</div>
              <div class="back">
                {" "}
                <img
                  className="game-img"
                  src={this.state.randImg2.img}
                  alt="no no no"
                />{" "}
              </div>
            </div>
          </div>
          <div class="container3">
            <div
              className={
                this.state.randImg3.isFlipped ? "card3 flipped" : "card3"
              }
              onClick={this.flipIt}
              id="randImg3"
            >
              <div class="front">Click to flip2</div>
              <div class="back">
                {" "}
                <img
                  className="game-img"
                  src={this.state.randImg3.img}
                  alt="no no no"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-btn">
          <button className="myButton" onClick={this.resetBoard}>
            Who's Drinking?
          </button>
        </div>
      </section>
    );
  }
} // end class

export default Board;
