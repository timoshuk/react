import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),

    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => {
        return el.id === id;
      });

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      let arr = [...todoData, newItem];

      return {
        todoData: arr
      };
    });
  };

  toggleProperty(arr, id, propName) {

    const idx = arr.findIndex(el => {
      return el.id === id;
    });

    const oldData = arr[idx];
    const newItem = { oldData, [propName]: !oldData[propName] };
    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);


    return [...before, newItem, ...after]

  }


  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {

      return {
        todoData: this.toggleProperty(todoData, id, "important")
      }
    });
  }


  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    });
  }

  render() {
    const { todoData } = this.state;

    let doneCount = todoData.filter((el) => el.done).length;
    let todoCount = todoData.length - doneCount;


    return (
      <div className="todo-app">
        <AppHeader toDo={doneCount} done={todoCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
