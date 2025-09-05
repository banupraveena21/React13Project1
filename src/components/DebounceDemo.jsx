import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // For demo: show debounced value changing after delay
  return (
    <div className="max-w-md mx-auto p-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <p className="mt-4 text-white">Debounced value: {debouncedSearchTerm}</p>
    </div>
  );
}
