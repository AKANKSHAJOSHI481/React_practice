import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard.js";
import PrivateRoute from "./components/PrivateRoute.js";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home isLoggedin = {isLoggedin}/>} />
        <Route
          path="/login"
          element={<Login setIsLoggedin={setIsLoggedin} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedin={setIsLoggedin} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedin = {isLoggedin} children={<Dashboard/>}>
              <Dashboard/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
