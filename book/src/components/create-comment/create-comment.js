import React, { Component } from "react";
import PropTypes from "prop-types";
import "./create-comment.css";

class CreateComment extends Component {
  state = {
    content: "",
    user: ""
  };

  render() {
    return React.createElement(
      "form",
      { className: "createComment" },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user
      }),
      React.createElement("input", { type: "text", placeholder: "Thoughts?" }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
}

CreateComment.PropTypes = {
  content: PropTypes.string
};

export default CreateComment;
