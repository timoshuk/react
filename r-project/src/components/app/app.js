import React, { Component } from "react";
import "./app.css";

import TodoList from "../todo-list/todo-list";
import Search from "../search";
import Container from "../container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <h1>Список справ</h1>
          <Search />
          <TodoList />
        </Container>
      </div>
    );
  }
}
