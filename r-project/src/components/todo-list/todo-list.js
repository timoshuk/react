import React from "react";
import "./todo-list.css";
import ListItem from "../list-item";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li>
        <ListItem />
      </li>
    </ul>
  );
};

export default TodoList;
