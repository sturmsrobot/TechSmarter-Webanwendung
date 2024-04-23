import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Sandbox from "./components/pages/Sandbox";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/pages/SignIn";
import { AuthProvider } from "./api/auth/AuthProvider";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
