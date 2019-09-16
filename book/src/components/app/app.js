import React from "react";
import "./app.css";

const App = ({ innerTxt, change }) => {
  return (
    <h1
      onClick={() => {
        change("sdklfjslkd");
      }}
    >
      {innerTxt}
    </h1>
  );
};

export default App;
