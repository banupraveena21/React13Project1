import { useState, useEffect } from 'react';

function useGeolocation(options = {}) {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setPosition((pos) => ({
        ...pos,
        error: 'Geolocation is not supported by your browser',
      }));
      return;
    }

    const successHandler = (pos) => {
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        error: null,
      });
    };

    const errorHandler = (error) => {
      setPosition((pos) => ({
        ...pos,
        error: error.message,
      }));
    };

    const watcherId = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    // Cleanup watcher on unmount
    return () => navigator.geolocation.clearWatch(watcherId);
  }, [options]);

  return position;
}

export default useGeolocation;
