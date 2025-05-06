import React, { Children, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import Eventform from "./components/Eventform";
import Card from "./pages/Card";
import RegForm from "./components/RegForm";
import { EventDetails } from "./components/EventDetails";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ProtecteRoute from "./components/ProtecteRoute";
import Footer from "./components/Footer";
import OpenRoute from "./components/OpenRoute";

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation(); // This will help us know the current route
  const Navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Set the isHome state based on the current route
    if (
      location.pathname === "/home" ||
      location.pathname === "/signup" ||
      location.pathname === "/login"
    ) {
      setIsHome(true); // Home page route
    } else {
      setIsHome(false); // Any other route
    }
  }, [location]);

  return (
    <div>
      <Navbar isHome={isHome} />
      <Routes>
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route path="/" element={<Home />} />

        <Route element={<ProtecteRoute />}>
          <Route
            path="/dashboard"
            isHome={isHome}
            element={
              // <ProtecteRoute>
              <Dashboard />
              // </ProtecteRoute>
            }
          />
          

          <Route path="/eventform" element={<Eventform />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/card" element={<Card />} />
        </Route>
        <Route path="/regform/:eventID" element={<RegForm />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
