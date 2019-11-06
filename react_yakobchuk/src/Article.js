import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Article.css";

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

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
      return (
        <div>
          <section className="under-l">{article.text}</section>
          <Comment comments={article.comments} />
        </div>
      );
    }
  };
}
