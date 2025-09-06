import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Firebase login logic here
    console.log({ role, email, password });

    // Example redirect after login
    if (role === "seller") {
      navigate("/sellerdashboard");
    } else if (role === "buyer") {
      navigate("/buyerdashboard");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-poppins px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-slate-600 mb-6 text-center text-sm">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-slate-700">
              Login as
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            >
              <option value="">Select role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded text-orange-400 focus:ring-orange-300" />
              Remember me
            </label>
            <Link to="#" className="text-orange-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-medium py-2.5 rounded-lg shadow-md hover:bg-orange-500 transition text-sm"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-xs text-slate-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-400 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
