import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
    fontSize: "20px"
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
