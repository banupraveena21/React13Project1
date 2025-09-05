import { useState, useCallback } from 'react';

function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not supported');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      return true;
    } catch (err) {
      console.error('Failed to copy!', err);
      setIsCopied(false);
      return false;
    }
  }, []);

  return { copy, isCopied };
}

export default useClipboard;
