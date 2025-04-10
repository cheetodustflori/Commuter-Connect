import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import NavBar from "./src/components/NavBar/Nav.jsx";

// import './index.css'; // we'll add Tailwind here later

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);
