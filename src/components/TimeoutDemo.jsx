import React from 'react';
import useTimeout from '../hooks/useTimeout';

export default function App() {
  useTimeout(() => alert('Hello!'), 3000);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Wait 3 seconds for an alert...
      </h1>
    </div>
  );
}
