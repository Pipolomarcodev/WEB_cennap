import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/bulma.css";
import "./globalStyles.css";
import { BrowserRouter } from "react-router-dom";




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="headerBackground">
        <App />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
