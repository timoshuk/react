import React, { Component } from "react";
import "./Article.css";

export default class Article extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? "Закрить" : "Открить"}
        </button>
        <div>{new Date().toLocaleString()}</div>
        {this.getBody()}
      </div>
    );
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getBody = () => {
    if (!this.state.isOpen) {
      return false;
    } else {
      const { article } = this.props;
      return <section className="under-l">{article.text}</section>;
    }
  };
}
