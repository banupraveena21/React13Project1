import React, { useState } from 'react';
import useClipboard from '../hooks/useClipboard';

export default function ClipboardExample() {
  const { copy, isCopied } = useClipboard();
  const [text, setText] = useState('Hello, world!');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <input
        type="text"
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => copy(text)}
        className={`px-4 py-2 rounded text-white font-semibold transition ${
          isCopied ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
}
