import React from "react";
import { render } from "react-dom";
import App from "./components/app";

const node = document.getElementById("root");

class Post extends React.Component {
  state = {
    txt: "App text from props"
  };

  changeTxt = text => {
    this.setState({ txt: text });
  };

  render() {
    const { txt } = this.state;
    return <App innerTxt={txt} change={this.changeTxt} />;
  }
}

render(<Post />, node);
