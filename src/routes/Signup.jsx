import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const errorMessages = {
    "auth/email-already-in-use": "Email already in use",
    "auth/invalid-email": "Invalid email address",
    "auth/weak-password": "Password should be at least 6 characters",
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save role and name in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role,
      });

      // Redirect after signup
      navigate("/login");
    } catch (err) {
      setError(errorMessages[err.code] || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-poppins px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2 text-center">
          Create Account
        </h2>
        <p className="text-slate-600 mb-6 text-center text-sm">
          Join us today and start your journey
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Sign up as</label>
            <select
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

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="mt-2 block w-full px-4 py-2 border rounded-lg border-slate-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none text-sm"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-400 text-white font-medium py-2.5 rounded-lg shadow-md hover:bg-orange-500 transition text-sm ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
