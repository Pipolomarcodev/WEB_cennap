import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/bulma.css";
import "./globalStyles.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
