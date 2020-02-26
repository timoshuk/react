import React, { Component } from "react";
import "./app.css";

import TodoList from "../todo-list/todo-list";
import Search from "../search";
import Container from "../container";

export default class App extends Component {
  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem("Create App"),
      this.createTodoItem("Add style to app"),
      this.createTodoItem("Add search function to app")
    ]
  };

  createTodoItem(label) {
    return {
      id: ++this.maxId,
      label,
      important: false,
      finished: false
    };
  }

  togleFinished = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(item => {
        return item.id === id;
      });
      const arrStart = todoData.slice(0, idx);
      const change = { ...todoData[idx], finished: !todoData[idx].finished };
      const arrEnd = todoData.slice(idx + 1);

      return { todoData: [...arrStart, change, ...arrEnd] };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <Container>
        <div className="app">
          <h1 className="app-title">Список справ</h1>
          <Search />
          <TodoList listData={todoData} togleFinished={this.togleFinished} />
        </div>
      </Container>
    );
  }
}
