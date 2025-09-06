import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="flex flex-col items-center justify-between
                 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-bg.svg')]
                 bg-cover text-sm text-gray-800 max-md:px-4 text-center h-[785px]"
    >
      {/* Nav */}
      <nav className="flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4 gap-6">
        {/* Logo */}
        <Link to="https://prebuiltui.com" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="SwapCircle Logo" className="h-15" />
          <span className="font-bold text-lg text-orange-500">SwapCircle</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/pages/jeans" className="text-gray-600 hover:text-orange-500">Products</a>
          <a href="/buyerdashboard" className="text-gray-600 hover:text-orange-500">Dashboard</a>
          <a href="/sellerdashboard" className="text-gray-600 hover:text-orange-500">Docs</a>
          <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
          <Link to="/login" className="text-gray-600 hover:text-orange-500">Login</Link>
        </div>

        {/* Right Side → Search + Contact */}
        <div className="flex items-center gap-4">
          {/* Compact Search Bar */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden">
            <select className="px-2 py-1 text-xs text-gray-600 bg-transparent outline-none cursor-pointer hover:text-orange-500">
              <option>All</option>
              <option>Jeans</option>
              <option>T-Shirts</option>
              <option>Shirts</option>
              <option>Shoes</option>
              <option>Accessories</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 w-28 text-xs outline-none bg-transparent"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-1 text-white text-xs font-medium">
              Go
            </button>
          </div>

          {/* Contact Us Button */}
          <button className="px-5 py-2 text-white bg-orange-500 font-medium hover:bg-orange-600 transition active:scale-95 rounded-full">
            Contact us
          </button>
        </div>

        {/* Burger Icon (Mobile) */}
        <button
          aria-label="menu burger"
          className="size-6 md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 18h18M3 6h18" />
          </svg>
        </button>
      </nav>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-[40px] text-slate-800">
          Where Fashion Finds a Second Chance.
        </h1>
        <p className="text-base mt-6 text-slate-600">
          Swap Circle is a sustainable fashion platform to swap, sell, or shop pre-loved event outfits, helping you save money, reduce waste, and look fabulous guilt-free
        </p>

        {/* Input box */}
        <div className="max-w-xl w-full bg-orange-50 border border-slate-300 rounded-xl overflow-hidden mt-4">
          <textarea
            className="w-full p-3 pb-0 resize-none outline-none bg-transparent"
            placeholder="Tell us about your idea"
            rows={3}
          />
          <div className="flex items-center justify-between pb-3 px-3">
            <button
              className="flex items-center justify-center bg-gray-500 p-1 rounded-full size-6"
              aria-label="Add"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h9M5.5 1v9"
                  stroke="#CCD5E2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="flex items-center justify-center p-1 rounded size-6 bg-orange-500"
              aria-label="Send"
            >
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5 5.5 1 10 5.5m-4.5 5.143V1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 text-slate-500">
          <p className="cursor-pointer">Which Kinds of the clothes i find here?</p>
          <p className="cursor-pointer">Is there condition of the clothes good?</p>
          <div className="w-full h-px bg-gray-400/50"></div>
          <div className="w-full h-px bg-gray-400/50"></div>
          <p className="cursor-pointer">Can I sell my stuff here also ?</p>
          <p className="cursor-pointer">Where was swap events occur in my state</p>
        </div>
      </div>

      <p className="text-gray-500 pb-3">
        By messaging us, you agree to our{" "}
        <a href="#" className="underline">
          Terms of Use
        </a>{" "}
        and confirm you've read our{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </main>
  );
}
