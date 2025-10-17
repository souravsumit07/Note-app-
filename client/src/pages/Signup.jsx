import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submiHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("Please fill all fields");
    }

    try {
      const res = await axios.post("http://localhost:3000/api/user/signup", {
        name,
        email,
        password,
      });
      alert(res.data.message);
      setname("");
      setemail("");
      setpassword("");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <form
        onSubmit={submiHandler}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-white">
          SignUp
        </h2>

        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
        >
          Create Account
        </button>
        <p className="text-white">Already have an account:- <Link to="/login" className="text-blue-500 font-semibold">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
