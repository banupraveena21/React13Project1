import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleDemo = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Toggle is <span className={isOpen ? 'text-green-400' : 'text-red-400'}>
          {isOpen ? 'ON' : 'OFF'}
        </span>
      </h1>
      <button
        onClick={toggle}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg"
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleDemo;
