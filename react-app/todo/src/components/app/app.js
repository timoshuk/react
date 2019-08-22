import React from "react";

import AppHeader from "../app-header";
import SerchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffy", id: 1 },
    { label: "Make APP", id: 2 },
    { label: "Have a lunch", id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SerchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
