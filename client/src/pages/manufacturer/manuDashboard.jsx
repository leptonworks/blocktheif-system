import React, { useState } from 'react';
import Overview from './dashboardPages/Overview';
import ProductManagement from './dashboardPages/ProductManagement';
import Analytics from './dashboardPages/Analytics';

function ManuDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const navigation = [
    { name: 'Dashboard', id: 'dashboard', component: Overview },
    { name: 'Product Management', id: 'projects', component: ProductManagement },
    { name: 'Analytics', id: 'calendar', component: Analytics },
  ];

  const renderPage = () => {
    const activeItem = navigation.find((item) => item.id === activeMenuItem);
    const ActiveComponent = activeItem.component;
    return <ActiveComponent />;
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="flex">
      <nav className="flex flex-col items-center justify-between w-64 h-screen py-6 bg-gray-800 text-gray-400">
        <ul className="mt-32 flex flex-col items-center justify-center">
          {navigation.map((item) => (
            <li
              key={item.id}
              className={`border-slate-700 inline-flex w-full items-center space-x-2 border-b bg-blue-800 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5 ${
                activeMenuItem === item.id
                  ? 'bg-gray-700 text-white'
                  : ''
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">
                  <a href="#">{item.name}</a>
                </span>
              </div>
            </li>
          ))}
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
