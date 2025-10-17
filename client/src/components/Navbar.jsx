import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import add from "../assets/add.json"

const Navbar = () => {
  const [isloggedIn, setisloggedIn] = useState(false)
  const navigate=useNavigate()

 

  const handleLogout=async() => {
    try {
      await axios.get("http://localhost:3000/api/user/logout",{
        withCredentials:true
      })
      setisloggedIn(true)
      alert("Logged out successfully!");
      navigate("/login");
      
    } catch (err) {
      console.error("Logout error:", err);
      alert("Failed to logout");
    }
    
  }
  return (
    <div className="flex  justify-between m-10 p-4  text-white border rounded-2xl ">
      <div>
        <Link to="/"><h1 className="font-bold text-2xl  ">NotesApp</h1></Link>
      </div>

      <div className="flex gap-10 ">
       {isloggedIn?
       (<>
        <Link to="/login">
          <button className="bg-blue-400 active:scale-95 px-4 py-2 rounded shadow active:shadow-2xl shadow-white">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-400 active:scale-95 px-4 py-2 rounded shadow active:shadow-2xl shadow-white">
            Signup
          </button>
        </Link></>)
       :
       (
       <>
       <button >
         <Lottie animationData={add} loop={true} className="w-15"/>
       </button>
       <button
            onClick={handleLogout}
            className="bg-red-500 active:scale-95 px-4 py-2 rounded shadow active:shadow-2xl shadow-white"
            >
            Logout
          </button>
            </>
          )
       }

       
      </div>
    </div>
  );
};

export default Navbar;