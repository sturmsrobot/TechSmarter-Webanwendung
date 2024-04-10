import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main_Page/index";
import HTML from "./Pages/HTML/index";
import JavaScript from "./Pages/Javascript/index";
import Login from "./Pages/Login/index";
import Python from "./Pages/Python/index";
import Registrierung from "./Pages/Registrierung/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Registrierung" element={<Registrierung />} />
        <Route path="/" element={<Main />} />
        <Route path="/HTML" element={<HTML />} />
        <Route path="/Javascript" element={<JavaScript />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Python" element={<Python />} />
        {/* <div className="App"><Main></Main></div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;