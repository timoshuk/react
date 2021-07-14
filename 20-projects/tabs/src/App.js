import React, { useState } from "react";
import "./App.css";

function App() {
  const [higlightStyle, setHiglightStyle] = useState({ left: 0, opacity: 0 });

  function moveHiglight(e) {
    setHiglightStyle({ left: e.nativeEvent.layerX - -150, opacity: 0.3 });
  }

  function hideHiglight(e) {
    setHiglightStyle({ left: 0, opacity: 0 });
  }

  return (
    <div className="App">
      <div className="browser">
        <div className="tabs">
          <div
            className="tab"
            onMouseOut={hideHiglight}
            onMouseMove={moveHiglight}
          >
            <div className="higlight" style={higlightStyle} />
            <a>Home</a>
          </div>
          <div
            className="tab"
            onMouseOut={hideHiglight}
            onMouseMove={moveHiglight}
          >
            <div className="higlight" style={higlightStyle} />
            <a>Abaut</a>
          </div>
          <div
            className="tab"
            onMouseOut={hideHiglight}
            onMouseMove={moveHiglight}
          >
            <div className="higlight" style={higlightStyle} />
            <a>Features</a>
          </div>
        </div>
        <h1 className="viewport">Pages go here</h1>
      </div>
    </div>
  );
}

export default App;
