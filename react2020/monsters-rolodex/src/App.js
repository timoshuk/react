import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Some text",
    };
  }

  changeTitle = () => {
    this.setState(({ title }) => {
      return {
        title: "AAAAAA",
      };
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <button
            onClick={() => {
              this.changeTitle();
            }}
          >
            Change TXT
          </button>
        </header>
      </div>
    );
  }
}

export default App;
