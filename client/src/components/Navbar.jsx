import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-10 p-4  ">
      <div>
        <h1 className="font-bold text-2xl  ">NotesApp</h1>
      </div>

      <div className="flex gap-10">
        <Link to="/login">
          <button className="bg-blue-400 active:scale-95 px-4 rounded shadow active:shadow-2xl shadow-white">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-400 active:scale-95 px-4 rounded shadow active:shadow-2xl shadow-white">
            Signup
          </button>
        </Link>

       
      </div>
    </div>
  );
};

export default Navbar;
