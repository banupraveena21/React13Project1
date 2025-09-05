import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

export default function OnlineStatus() {
  const isOnline = useOnlineStatus();

  return (
    <div
      className={`p-4 rounded text-white font-semibold text-center min-h-screen flex items-center justify-center ${
        isOnline ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {isOnline ? 'You are Online' : 'You are Offline'}
    </div>
  );
}
