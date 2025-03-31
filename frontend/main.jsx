import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/Pages/App.jsx";
import NavBar from "./src/components/NavBar/Nav.jsx";

// import './index.css'; // we'll add Tailwind here later

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>
);
