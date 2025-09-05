import useFetch from '../hooks/useFetch';

export default function FetchExample() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div className="p-6 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">useFetch Example</h1>

      {loading && <p className="text-blue-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {data && (
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="mt-2 text-gray-300">{data.body}</p>
        </div>
      )}
    </div>
  );
}
