import React, { useState } from "react";

// Sample Data
const initialOrders = [
  { id: "#2001", customer: "John Doe", product: "Jeans", status: "Shipped" },
  { id: "#2002", customer: "Jane Smith", product: "Shirt", status: "Pending" },
];
const initialProducts = ["Jeans", "T-Shirt", "Jacket"];

const SellerDashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [orders] = useState(initialOrders);
  const [products] = useState(initialProducts);

  const handleNavClick = (page) => setActivePage(page);

  return (
    <div className="flex h-screen bg-white font-poppins">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-400 to-orange-300 text-white flex flex-col shadow-2xl">
        <div className="p-6 text-center border-b border-white/20">
          <h1 className="text-2xl font-bold tracking-wider">Seller Dashboard</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3">
          {["home", "products", "orders", "profile"].map((page) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              className={`flex items-center gap-3 py-3 px-4 w-full text-left rounded-lg transition font-medium hover:bg-white/20 ${
                activePage === page ? "bg-white/30" : ""
              }`}
            >
              {page === "home" && "🏠 Home"}
              {page === "products" && "📦 Products"}
              {page === "orders" && "🛒 Orders"}
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
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 rounded-b-xl">
          <h2 className="text-xl font-semibold text-orange-600">
            Welcome, Seller!
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-sm">seller@example.com</span>
            <img
              src="https://via.placeholder.com/35"
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-orange-400"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* HOME PAGE */}
          {activePage === "home" && (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-300 text-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold">Welcome back, Seller 👋</h2>
                <p className="text-sm opacity-90 mt-2">
                  Here’s a quick look at your business performance today.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Products"
                  value={products.length}
                  icon="📦"
                  color="orange"
                />
                <StatCard
                  title="Orders Received"
                  value={orders.length}
                  icon="🛒"
                  color="yellow"
                />
                <StatCard
                  title="Pending Shipments"
                  value={orders.filter((o) => o.status === "Pending").length}
                  icon="⏳"
                  color="red"
                />
                <StatCard
                  title="Revenue"
                  value="₹5,450"
                  icon="💰"
                  color="purple"
                />
              </div>

              {/* Sales Overview */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-4">
                  📊 Sales Overview
                </h3>
                <div className="h-40 flex items-center justify-center text-gray-400 text-sm border-2 border-dashed rounded-xl">
                  (Chart coming soon...)
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <button
                  onClick={() => setActivePage("products")}
                  className="bg-orange-500 text-white py-6 rounded-xl shadow-md hover:scale-105 hover:bg-orange-600 transition flex flex-col items-center gap-2"
                >
                  ➕ Add New Product
                  <span className="text-xs opacity-80">
                    Upload and list your items
                  </span>
                </button>

                <button
                  onClick={() => setActivePage("orders")}
                  className="bg-yellow-400 text-white py-6 rounded-xl shadow-md hover:scale-105 hover:bg-yellow-500 transition flex flex-col items-center gap-2"
                >
                  📑 View Orders
                  <span className="text-xs opacity-80">
                    Check recent buyer activity
                  </span>
                </button>

                <button
                  onClick={() => setActivePage("products")}
                  className="bg-purple-500 text-white py-6 rounded-xl shadow-md hover:scale-105 hover:bg-purple-600 transition flex flex-col items-center gap-2"
                >
                  📦 Manage Products
                  <span className="text-xs opacity-80">
                    Edit, delete, or update stock
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* PRODUCTS PAGE */}
          {activePage === "products" && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">
                📦 Products
              </h3>
              <ul className="space-y-2">
                {products.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b py-2"
                  >
                    {p}
                    <button className="text-red-500">Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ORDERS PAGE */}
          {activePage === "orders" && <OrdersTable orders={orders} />}

          {/* PROFILE PAGE */}
          {activePage === "profile" && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">
                👤 Profile
              </h3>
              <p>Name: John Seller</p>
              <p>Email: seller@example.com</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Components
const StatCard = ({ title, value, icon, color }) => {
  const colors = {
    orange: "bg-orange-100 text-orange-500",
    yellow: "bg-yellow-100 text-yellow-500",
    red: "bg-red-100 text-red-500",
    purple: "bg-purple-100 text-purple-500",
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 flex flex-col items-center gap-4 hover:scale-105 transition transform duration-300 hover:shadow-2xl">
      <div className={`${colors[color].split(" ")[0]} p-3 rounded-full text-3xl ${colors[color].split(" ")[1]}`}>
        {icon}
      </div>
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="text-3xl font-bold text-orange-600">{value}</p>
    </div>
  );
};

const OrdersTable = ({ orders }) => (
  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
    <h3 className="text-lg font-semibold text-orange-600 mb-4">Recent Orders</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-lg">
        <thead className="bg-orange-50 rounded-t-lg">
          <tr>
            <th className="px-4 py-2 border-b text-gray-600">Order ID</th>
            <th className="px-4 py-2 border-b text-gray-600">Customer</th>
            <th className="px-4 py-2 border-b text-gray-600">Product</th>
            <th className="px-4 py-2 border-b text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr
              key={o.id}
              className="hover:bg-orange-50 transition cursor-pointer"
            >
              <td className="px-4 py-2 border-b">{o.id}</td>
              <td className="px-4 py-2 border-b">{o.customer}</td>
              <td className="px-4 py-2 border-b">{o.product}</td>
              <td
                className={`px-4 py-2 border-b font-medium ${
                  o.status === "Shipped" ? "text-green-500" : "text-yellow-500"
                }`}
              >
                {o.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SellerDashboard;
