import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill all fields");
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      alert(res.data.message);
      setemail("")
      setpassword("")
      navigate("/")
      
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-white">
          Login
        </h2>

        <input
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="password"
          placeholder="Enter your password"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
        >
          Login
        </button>
        <p className="text-white">
          Donot have an account:-{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            SingUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
