import { useState } from "react";
import Navbar from "../components/Navbar";

export default function JeansDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
      <Navbar/>
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 font-poppins">
        {/* Product Images */}
        <div>
          <img
            src="/images/j4.jpg"
            alt="Jeans"
            className="w-full h-[500px] object-cover rounded-xl shadow-md"
          />
          <div className="flex gap-3 mt-4">
            <img
              src="/images/j1.jpg"
              alt="thumb"
              className="w-20 h-20 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-orange-500"
            />
            <img
              src="/images/j2.jpg"
              alt="thumb"
              className="w-20 h-20 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-orange-500"
            />
            <img
              src="/images/j3.jpg"
              alt="thumb"
              className="w-20 h-20 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-orange-500"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-slate-800">
            Classic Blue Denim Jeans
          </h1>
          <p className="text-lg text-orange-600 font-medium mt-2">Rs. 290.00</p>
          <p className="text-slate-600 mt-4">
            These premium quality denim jeans are designed for comfort and
            durability. Perfect for casual outings, parties, and everyday wear.
          </p>

          {/* Size Selector */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-700">Select Size:</h3>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-slate-300 hover:border-orange-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-700">Select Color:</h3>
            <div className="flex gap-3 mt-2">
              {["Blue", "Black", "Grey"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedColor === color
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-slate-300 hover:border-orange-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center gap-3">
            <h3 className="text-sm font-medium text-slate-700">Quantity:</h3>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => handleQuantityChange("dec")}
                className="px-3 py-1 text-lg font-semibold text-slate-600 hover:bg-slate-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("inc")}
                className="px-3 py-1 text-lg font-semibold text-slate-600 hover:bg-slate-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg shadow-md transition-all">
              Add to Cart
            </button>
            <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg shadow-md transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
