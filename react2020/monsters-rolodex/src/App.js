import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankinshtein",
          id: "uid1",
        },
        {
          name: "Dracula",
          id: "uid2",
        },
        {
          name: "Zombie",
          id: "uid3",
        },
      ],
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
