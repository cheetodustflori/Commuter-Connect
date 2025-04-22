// src/ProtectedRoute.jsx
import { isLoggedIn } from "../utils/auth"; 
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = isLoggedIn(); // your own login check logic
  return loggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
