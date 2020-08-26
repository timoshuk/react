import React, { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMorkdown] = useState("# sup");

  function handleChange(e) {
    setMorkdown(e.target.value);
  }

  return (
    <div className="App">
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className="preview" source={markdown} />

      {/* { <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>} */}
    </div>
  );
}

export default App;
