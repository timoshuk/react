import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import App from "./components/app";

const node = document.getElementById("root");
const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello World!!!",
    React.createElement(
      "a",
      { href: "mailto:o.t@gmail.com" },
      React.createElement("h1", {}, "React in actions"),
      React.createElement("em", {}, "...and now it realy is!!!")
    )
  )
);
ReactDOM.render(root, node);
