import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const items = ["Learn React", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List 24</h1>;
};

const SerchPanel = () => {
  const searchStyle = {
    fontSize: "20px"
  };
  const searchText = "Type here to search";
  return <input style={searchStyle} placeholder={searchText} />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SerchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
