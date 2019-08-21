import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SerchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

import "./index.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffy", important: false, id: 1 },
    { label: "Make APP", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDO={1} done={3} />
      <div className="top-panel d-flex">
        <SerchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
