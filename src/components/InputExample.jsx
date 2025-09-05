import useInput from "../hooks/useInput";

export default function InputExample() {
  const { value, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${value}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <label className="block mb-2 text-white font-semibold" htmlFor="name">
        Your Name
      </label>
      <input
        id="name"
        type="text"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Enter your name"
      />
      <button
        type="submit"
        className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
      >
        Submit
      </button>
    </form>
  );
}
