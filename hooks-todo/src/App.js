import React, { useState } from "react";
import "./App.css";
import Todo from "./components/todo";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "React Hooks in Depth", isComplated: false },
    { text: "Write Articles @ Medium", isComplated: false },
    { text: "Share Articles at Reddit", isComplated: false }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
