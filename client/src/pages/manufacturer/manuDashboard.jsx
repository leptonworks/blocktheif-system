import React, { useState } from "react";
import Overview from "./dashboardPages/Overview";
import ProductManagement from "./dashboardPages/ProductManagement";
import Analytics from "./dashboardPages/Analytics";
// import Settings from "./dashboardPages/Settings";

function ManuDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const renderPage = () => {
    switch (activeMenuItem) {
      case "dashboard":
        return <Overview />;
      case "projects":
        return <ProductManagement />;
      case "calendar":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex">
      <nav className="flex flex-col items-center justify-between w-64 h-screen py-6 bg-gray-800 text-gray-400">
        <ul className="mt-32 flex flex-col items-center justify-center">
          <li
            className={`px-4 py-5 hover:bg-gray-700 hover:text-white ${
              activeMenuItem === "dashboard" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActiveMenuItem("dashboard")}
          >
            <a href="#">Overview</a>
          </li>
          <li
            className={`px-4 py-5 hover:bg-gray-700 hover:text-white ${
              activeMenuItem === "projects" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActiveMenuItem("projects")}
          >
            <a href="#">Product Management</a>
          </li>
          <li
            className={`px-4 py-5 hover:bg-gray-700 hover:text-white ${
              activeMenuItem === "calendar" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActiveMenuItem("calendar")}
          >
            <a href="#">Analytics</a>
          </li>
          <li
            className={`px-4 py-5 hover:bg-gray-700 hover:text-white ${
              activeMenuItem === "settings" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActiveMenuItem("settings")}
          >
            <a href="#">Profile</a>
          </li>
        </ul>
        <div className="flex flex-col items-center">
          <p className="text-sm">&copy; My App 2023</p>
          <div className="my-2">
            <a className="text-gray-400 hover:text-white" href="#">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a className="text-gray-400 hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </nav>
      <div className="flex-1">{renderPage()}</div>
    </div>
  );
}

export default ManuDashboard;
