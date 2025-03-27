import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/pages/App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css'; // we'll add Tailwind here later

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
