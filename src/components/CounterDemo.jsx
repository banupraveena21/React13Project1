import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterDemo = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterDemo;
