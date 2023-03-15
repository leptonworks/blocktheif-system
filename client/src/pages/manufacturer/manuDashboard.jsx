import React, { useState } from "react";
import Overview from "./dashboardPages/Overview";
import ProductManagement from "./dashboardPages/ProductManagement";
import Analytics from "./dashboardPages/Analytics";
// import Settings from "./dashboardPages/Settings";

function MenuItem(props) {
  const { active, text, onClick } = props;

  return (
    <li
      className={`border-slate-700 inline-flex w-full items-center space-x-2 border-b bg-blue-800 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5 ${active ? "bg-gray-700 text-white" : ""}`}
      onClick={onClick}
    >
      {props.children}
    </li>
  );
}

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
      default:
        return <Overview />;
    }
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="flex">
      <nav className="flex flex-col items-center justify-between w-64 h-screen py-6 bg-gray-800 text-gray-400">
        <ul className="mt-32 flex flex-col items-center justify-center">
          <MenuItem
            active={activeMenuItem === "dashboard"}
            onClick={() => handleMenuItemClick("dashboard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
                      </svg>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            <a href="#">DashBoard</a>
          </span>
          <span className="hidden text-sm text-white/50 md:block">
            Overview
          </span>
        </div>
      </MenuItem>

      <MenuItem
        active={activeMenuItem === "projects"}
        onClick={() => handleMenuItemClick("projects")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
          />
        </svg>

        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            <a href="#">Manage</a>
          </span>
          <span className="hidden text-sm text-white/50 md:block">
            Product Management
          </span>
        </div>
      </MenuItem>

      <MenuItem
        active={activeMenuItem === "calendar"}
        onClick={() => handleMenuItemClick("calendar")}
      >
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            <a href="#">Analytics</a>
          </span>
          <span className="hidden text-sm text-white/50 md:block">
            Overview
          </span>
        </div>{" "}
      </MenuItem>

      <MenuItem
        active={activeMenuItem === "settings"}
        onClick={() => handleMenuItemClick("settings")}
      >
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            <a href="#">Profile</a>
          </span>
          <span className="hidden text-sm text-white/50 md:block">
            Overview
          </span>
        </div>{" "}
      </MenuItem>
    </ul>
    <div className="flex flex-col items-center">
      <p className="text-sm">&copy; My App 2023
      </p>
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