import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // Safely retrieve and parse stored value
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Failed to parse localStorage value", error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}
