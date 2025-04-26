import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Schedule from "./Pages/Schedule";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Pages/Map";
import Nearby from "./Pages/Nearby";
import Friends from "./Pages/Friends";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/Schedule"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Nearby"
          element={
            <ProtectedRoute>
              <Nearby />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Friends"
          element={
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
