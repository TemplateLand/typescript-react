import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.postcss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app-root")
);

if (module.hot) {
  module.hot.accept();
}
