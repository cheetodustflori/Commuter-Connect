import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Schedule.jsx';
import Map from "./Map.jsx";
import Nearby from "./Nearby.jsx";
import Friends from "./Friends.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Nearby" element={<Nearby />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Friends" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
