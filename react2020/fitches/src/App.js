import React from "react";
import styled from "styled-components";

import Cart from "./components/cart/card.component.jsx";

import "./App.css";

const Text = styled.div`
  color: blue;
  font-size: 50px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted green"};
`;

const textStyles = {
  color: "red",
  fontSize: "24px",
};

function App() {
  return (
    <div className="App">
      <Cart>
        <h1 styles={textStyles}>Header</h1>
        <Text isActive={false}>Styled text</Text>
      </Cart>
    </div>
  );
}

export default App;
