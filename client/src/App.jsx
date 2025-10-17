import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Galaxy from "./components/Galaxy";

const App = () => {
  return (
    <>
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
       
       <Galaxy />
       </div>
       <div className="relative ">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
    
  );
};

export default App;
