import React from 'react';
import useGeolocation from '../hooks/useGeoloaction';

export default function GeolocationExample() {
  const { latitude, longitude, error } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Location</h1>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : latitude && longitude ? (
        <div className="text-lg">
          <p>Latitude: {latitude.toFixed(6)}</p>
          <p>Longitude: {longitude.toFixed(6)}</p>
        </div>
      ) : (
        <p className="text-gray-600">Getting location…</p>
      )}
    </div>
  );
}
