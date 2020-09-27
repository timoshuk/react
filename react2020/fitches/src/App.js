import React from "react";
import styled from "styled-components";

import "./App.css";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
`;

function App() {
  return (
    <div className="App">
      <Wraper>
        <MainTitle>Main Header</MainTitle>
      </Wraper>
    </div>
  );
}

export default App;
