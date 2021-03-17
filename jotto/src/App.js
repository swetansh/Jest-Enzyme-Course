import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
