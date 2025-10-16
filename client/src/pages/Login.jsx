import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-2 text-white">Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
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
      </form>
    </div>
  )
}

export default Login
