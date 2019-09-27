import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Core from "./Core/components";

function App() {
  return (
    <div className="App">
      <Core />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
