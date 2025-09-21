import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// Login Page
function Login() {
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) { alert("Select Client or Admin"); return; }
    if (!phone || phone.length < 6) { alert("Enter valid phone number"); return; }

    // Navigate to user or admin dashboard
    if (role === "client") navigate("/user");
    else navigate("/admin");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-6 text-indigo-400">LEGAL-EASE ASSISTANT</h1>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRole("client")}
            className={`px-4 py-2 rounded ${role==="client"?"bg-indigo-500":"bg-gray-700"}`}
          >Client</button>
          <button
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded ${role==="admin"?"bg-indigo-500":"bg-gray-700"}`}
          >Admin</button>
        </div>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={e=>setPhone(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 placeholder-gray-400 text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-indigo-500 rounded hover:bg-indigo-600"
        >Login</button>
      </div>
    </div>
  );
}

// User Dashboard
function UserDashboard() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-4">
      <h2 className="text-2xl mb-4">Welcome, Client</h2>
      <Link to="/translation" className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 w-64 text-center">Translation</Link>
      <Link to="/calendar" className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 w-64 text-center">Smart Calendar</Link>
      <Link to="/risk" className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 w-64 text-center">Risk Factor Analysis</Link>
    </div>
  );
}

// Admin Dashboard
function AdminDashboard() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">Admin Dashboard</h2>
      <p>Welcome, Admin! (More features coming soon...)</p>
    </div>
  );
}

// Simple Welcome Pages
function Translation() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-4">Welcome to Translation</h2>
      <p>This is a sample page for the Translation feature.</p>
      <Link to="/user" className="mt-6 px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600">Back to Dashboard</Link>
    </div>
  );
}

function Calendar() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-4">Welcome to Smart Calendar</h2>
      <p>This is a sample page for the Smart Calendar feature.</p>
      <Link to="/user" className="mt-6 px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600">Back to Dashboard</Link>
    </div>
  );
}

function Risk() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-4">Welcome to Risk Factor Analysis</h2>
      <p>This is a sample page for the Risk Factor Analysis feature.</p>
      <Link to="/user" className="mt-6 px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600">Back to Dashboard</Link>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/risk" element={<Risk />} />
      </Routes>
    </Router>
  );
}
