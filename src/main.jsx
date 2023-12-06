import React from "react";
import ReactDOM from "react-dom/client";
import './config/fontStyles.jsx';
import Router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
