import React, { useState } from "react";
import Navbar from "../components/Navbar";

const BuyerDashboard = () => {
  const [activePage, setActivePage] = useState("home");

  const orders = [
    { id: "#1001", product: "Sneakers", status: "Delivered", date: "2025-08-15" },
    { id: "#1002", product: "T-Shirt", status: "Shipped", date: "2025-08-20" },
    { id: "#1003", product: "Watch", status: "Pending", date: "2025-08-25" },
  ];

  const wishlist = ["Leather Jacket", "Wireless Headphones", "Gaming Mouse"];
  const recommended = ["Sunglasses", "Casual Shoes", "Backpack"];

  const stats = [
    { title: "Total Orders", value: orders.length, color: "orange" },
    { title: "Wishlist Items", value: wishlist.length, color: "red" },
    { title: "Reward Points", value: "320", color: "yellow" },
    { title: "Spent", value: "$1,250", color: "purple" },
  ];

  return (
    <>
    <Navbar/>
    <div className="flex h-screen bg-white font-poppins">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-400 to-orange-300 text-white flex flex-col shadow-2xl">
        <div className="p-6 text-center border-b border-white/20">
          <h1 className="text-2xl font-bold tracking-wide">Buyer Dashboard</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3">
          {["home", "orders", "wishlist", "profile"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`flex items-center gap-3 py-3 px-4 w-full text-left rounded-lg transition font-medium hover:bg-white/20 ${
                activePage === page ? "bg-white/30" : ""
              }`}
            >
              {page === "home" && "🏠 Home"}
              {page === "orders" && "🛒 Orders"}
              {page === "wishlist" && "❤️ Wishlist"}
              {page === "profile" && "👤 Profile"}
            </button>
          ))}
          <button className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/20 text-red-200 w-full">
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 rounded-b-xl">
          <h2 className="text-xl font-semibold text-orange-600">Welcome, Buyer!</h2>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-sm">KrupaPanchal@gmail.com</span>
            <img
              src="https://via.placeholder.com/35"
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-orange-400"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {activePage === "home" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <StatCard key={i} {...stat} />
                ))}
              </div>

              {/* Recommended Products */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-orange-600 mb-4">✨ Recommended For You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommended.map((item, i) => (
                    <div
                      key={i}
                      className="bg-orange-50 rounded-xl p-5 flex flex-col items-center gap-3 shadow-md hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <div className="bg-white p-3 rounded-lg shadow-sm">📦</div>
                      <p className="font-medium text-gray-700">{item}</p>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg text-sm shadow hover:bg-orange-600 transition">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <OrdersTable orders={orders} />
            </>
          )}

          {activePage === "orders" && <OrdersTable orders={orders} />}

          {activePage === "wishlist" && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">❤️ My Wishlist</h3>
              <ul className="space-y-3">
                {wishlist.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center bg-orange-50 p-3 rounded-lg shadow hover:scale-105 transition"
                  >
                    <span className="text-gray-700">{item}</span>
                    <button className="text-red-500 hover:text-red-700">Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activePage === "profile" && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">👤 My Profile</h3>
              <p>Name: Yash Buyer</p>
              <p>Email: KrupaPanchal@gmail.com</p>
              <p>Member Since: 2023</p>
            </div>
          )}
        </main>
      </div>
    </div>
    </>
  );
};

// Stat Card Component
const StatCard = ({ title, value, color }) => {
  const colors = {
    orange: { bg: "bg-orange-100", text: "text-orange-500", bar: "bg-orange-200" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-500", bar: "bg-yellow-200" },
    red: { bg: "bg-red-100", text: "text-red-500", bar: "bg-red-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-500", bar: "bg-purple-200" },
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 flex flex-col items-center gap-4 hover:scale-105 transition transform duration-300 hover:shadow-2xl">
      <div className={`${colors[color].bg} p-3 rounded-full text-3xl ${colors[color].text}`}>💎</div>
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="text-3xl font-bold text-orange-600">{value}</p>
      <div className={`${colors[color].bar} rounded-full h-2 mt-2 w-full`}>
        <div
          className={`${colors[color].text} h-2 rounded-full w-3/4 transition-all duration-500`}
        ></div>
      </div>
    </div>
  );
};

// Orders Table
const OrdersTable = ({ orders }) => (
  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
    <h3 className="text-lg font-semibold text-orange-600 mb-4">🛍️ Recent Orders</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-lg">
        <thead className="bg-orange-50 rounded-t-lg">
          <tr>
            <th className="px-4 py-2 border-b text-gray-600">Order ID</th>
            <th className="px-4 py-2 border-b text-gray-600">Product</th>
            <th className="px-4 py-2 border-b text-gray-600">Status</th>
            <th className="px-4 py-2 border-b text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="hover:bg-orange-50 transition cursor-pointer">
              <td className="px-4 py-2 border-b">{o.id}</td>
              <td className="px-4 py-2 border-b">{o.product}</td>
              <td
                className={`px-4 py-2 border-b font-medium ${
                  o.status === "Delivered"
                    ? "text-green-500"
                    : o.status === "Shipped"
                    ? "text-blue-500"
                    : "text-yellow-500"
                }`}
              >
                {o.status}
              </td>
              <td className="px-4 py-2 border-b">{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default BuyerDashboard;
