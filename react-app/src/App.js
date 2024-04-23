import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import QuizFrame from "./components/pages/quizcon/SuperQuiz";
import Sandbox from "./components/pages/Sandbox";
import { SignUp } from "./components/pages/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/pages/SignIn";
import GameFrame from "./game/SuperGame";
import { AuthProvider } from "./api/auth/AuthProvider";
import UserDashboard from "./components/pages/UserDashboard";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizFrame />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/GTAVI" element={<GameFrame />} />
         <Route path="/dashboard" element={<UserDashboard />} />

          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
