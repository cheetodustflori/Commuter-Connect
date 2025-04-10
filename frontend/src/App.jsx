import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Schedule from './Pages/Schedule';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Pages/Map";
import Nearby from "./Pages/Nearby";
import Friends from "./Pages/Friends";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Nearby" element={<Nearby />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
