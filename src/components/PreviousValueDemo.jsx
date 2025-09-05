import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function PreviousValueDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded text-white">
      <h2 className="text-2xl font-bold mb-4">usePrevious Hook Demo</h2>
      <p>
        Current count: <span className="font-mono">{count}</span>
      </p>
      <p>
        Previous count:{" "}
        <span className="font-mono text-cyan-400">
          {prevCount !== undefined ? prevCount : "N/A"}
        </span>
      </p>

      <div className="mt-4 space-x-3">
        <button
          className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
