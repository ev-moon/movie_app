import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); // React pushes App.js content in index.html root tag
// App is a component (that returns HTML)! Everything in React is based on components
