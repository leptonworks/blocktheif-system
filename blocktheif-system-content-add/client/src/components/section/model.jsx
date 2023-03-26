import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Model({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  const haddleClose = (e) => {
    if (e.target.id == 'wrapper') onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm "
      id="wrapper"
      onClick={haddleClose}
    >
      <div className="flex flex-col w-full lg:w-4/5 xl:w-3/6">
        <button className="text-white place-self-end ">
          <XMarkIcon width={20} height={20} onClick={() => onClose(false)} />
        </button>
        <div className="flex justify-center p-5 bg-[#101010] rounded-md drop-shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
