import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email is ${email} and password is ${password}`);

    setEmail("");
    setPassword("");

    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 p-10 md:p-20 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-emerald-600 mb-4">
          Welcome to Employee Management
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please log in to access your dashboard and manage your tasks
          efficiently.
        </p>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-5 text-lg outline-none bg-transparent placeholder:text-gray-400 mb-4 w-full"
            type="email"
            placeholder="Enter your company email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-5 text-lg outline-none bg-transparent placeholder:text-gray-400 mb-6 w-full"
            type="password"
            placeholder="Enter your secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border-none bg-emerald-600 text-white rounded-full py-2 px-5 text-lg outline-none mt-5 w-full hover:bg-emerald-700 transition-colors duration-300"
            type="submit"
          >
            Login to Dashboard
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Having trouble logging in?{" "}
            <a
              href="#"
              className="text-emerald-600 font-medium hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
