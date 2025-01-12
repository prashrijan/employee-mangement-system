import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  // Two way binding
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email is ${email} and password is ${password}`);

    setEmail("");
    setPassowrd("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <button
            className="border-none bg-emerald-600 rounded-full py-2 px-5 text-xl outline-none mt-5 w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
