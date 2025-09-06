import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-poppins">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-slate-800 mb-2">Welcome Back</h2>
        <p className="text-slate-600 mb-8">Login to continue your journey</p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 block w-full px-5 py-3 border rounded-xl border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 block w-full px-5 py-3 border rounded-xl border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="rounded text-orange-400 focus:ring-orange-300"
              />
              Remember me
            </label>
            <a href="#" className="text-orange-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-medium py-3 rounded-xl shadow-md hover:bg-orange-500 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <hr className="flex-grow border-slate-300" />
          <span className="px-3 text-slate-400 text-sm">OR</span>
          <hr className="flex-grow border-slate-300" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-slate-200 py-3 rounded-xl shadow-sm hover:bg-slate-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-slate-200 py-3 rounded-xl shadow-sm hover:bg-slate-50 transition">
            <img
              src="https://www.svgrepo.com/show/349408/facebook.svg"
              className="w-5 h-5"
              alt="Facebook"
            />
            Continue with Facebook
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-400 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
