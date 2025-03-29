import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./Schedule.jsx";
import Map from "./Map.jsx";
import Nearby from "./Nearby.jsx";
import Friends from "./Friends.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/map" element={<Map />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
