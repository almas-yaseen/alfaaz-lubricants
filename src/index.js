import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainRouter from "./MainRouter"; // Import the router

ReactDOM.render(
  <React.StrictMode>
    <MainRouter /> {/* Use MainRouter to handle the routing */}
  </React.StrictMode>,
  document.getElementById("root")
);
