import React, { useState } from "react";
import Overview from "./dashboardPages/Overview";
import Analytics from "./dashboardPages/Analytics";
import ProductManagement from "./dashboardPages/ProductManagement";

function ManuDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const navigation = [
      {
      name: "Dashboard",
      id: "dashboard",
      icon: (
        <svg
          key="dashboard-icon"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      component: Overview,
    },
    {
      name: "Management",
      id: "productManagement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="7" y1="21" x2="7" y2="13" />
          <line x1="17" y1="21" x2="17" y2="13" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="15" y1="9" x2="9" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      component: ProductManagement,
    },
    {
      name: "Analytics",
      id: "analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10h-6M21 6h-6M21 14h-6M21 18h-6M10 21V5M6 21V5" />
        </svg>
      ),
      component: Analytics,
    },
    
  ];

  const renderPage = () => {
    const activeItem = navigation.find((item) => item.id === activeMenuItem);
    if (!activeItem) {
      return <div>Page not found</div>; // fallback component
    }
    const ActiveComponent = activeItem.component;
    return <ActiveComponent />;
  };
  
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="nav-spacing">
      <div className="min-h-screen bg-gray-100 flex">
        <div
          onMouseEnter={toggleSidebar}
          onMouseLeave={toggleSidebar}
          className={`sidebar min-h-screen w-[3.35rem] overflow-hidden border-r z-10 ${
            isSidebarExpanded ? "w-56 bg-white shadow-lg" : ""
          }`}
        >
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5">
              <img
                  src="https://picsvg.com/svg/NeQgCP01.svg?v=21651"
                  className="w-8"
                  alt=""
                ></img>
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                {navigation.map((item) => (
                  <li
                    key={item.id}
                    className={`min-w-max ${
                      activeMenuItem === item.id
                        ? "bg-gradient-to-r from-sky-600 to-cyan-400"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() => setActiveMenuItem(item.id)}
                      className={`flex items-center space-x-4 px-4 py-3 text-gray-600 ${
                        activeMenuItem === item.id ? "text-white" : ""
                      } rounded-md`}
                    >
                      {item.icon}
                      <span
                        className={`${
                          isSidebarExpanded ? "" : "hidden"
                        } -mr-1 font-medium`}
                      >
                        {item.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* ... */}
          </div>
        </div>
        <div className="flex-grow">{renderPage()}</div>
      </div>
    </div>
  );
}
export default ManuDashboard;
