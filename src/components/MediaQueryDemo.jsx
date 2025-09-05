import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`p-6 rounded-lg text-white ${
          isMobile ? 'bg-blue-500' : 'bg-green-600'
        }`}
      >
        {isMobile ? 'Mobile View' : 'Desktop View'}
      </div>
    </div>
  );
}
