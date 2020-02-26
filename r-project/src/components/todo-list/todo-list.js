import React from "react";
import "./todo-list.css";
import ListItem from "../list-item";

const TodoList = ({ listData, togleFinished }) => {
  const list = listData.map(item => {
    const { id, ...props } = item;
    return (
      <li className="todo-list__item" key={id}>
        <ListItem id={id} data={props} togleFinished={togleFinished} />
      </li>
    );
  });

  return <ul className="todo-list">{list}</ul>;
};

export default TodoList;
