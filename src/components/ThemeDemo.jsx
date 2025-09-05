import React from 'react';
import useTheme from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
        Current Theme: {theme}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}
