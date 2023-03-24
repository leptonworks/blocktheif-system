import React, { useState } from "react";
import webCam from "./webCam";
import ReviewML from "../ML";
import Profile from "../user/profile";

import ProductManagement from "../manufacturer/dashboardPages/ProductManagement";

function UserDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("scanqr");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const navigation = [
      {
      name: "Scan QR",
      id: "scanqr",
      icon:
       (
        
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="w-4" class="bi bi-qr-code-scan" viewBox="0 0 16 16"> <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/> <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/> <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/> <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/> <path d="M12 9h2V8h-2v1Z"/> </svg>

      ),
      component: webCam,
    },
    {
      name: "History",
      id: "history",
      icon: (
        
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/> </svg>

      ),
      component: ProductManagement,
    },
    {
      name: "Reviews",
      id: "reviews",
      icon: (

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16"> <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/> <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/> </svg>

      ),
      component: ReviewML,
    },
    {
      name: "Profile",
      id: "profile",
      icon: (

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
      ),
      component: Profile,
    }
    
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
          <div   className="flex h-screen flex-col justify-between pt-2 pb-6">
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
export default UserDashboard;
