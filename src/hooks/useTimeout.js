import { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    // Cleanup on unmount or if delay changes
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;
