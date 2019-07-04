import React from "react";
import PlayerInfo from "../player_info/playerInfo";
import Board from "../game_area/board";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./App.scss";

function App() {
  return (
    <main>
      <Header />
      <Board />
      <Footer />
    </main>
  );
}

export default App;
