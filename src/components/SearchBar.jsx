// src/components/SearchBar.jsx
import { Search } from "lucide-react"; // Changed icon to Search for consistency
import Container from "./Container";
import { useState } from "react";

export default function SearchBar({ onSearchChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  return (
    <Container className="relative mt-6 mb-6"> {/* Added mb-6 */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" /> {/* Added pointer-events-none */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for companies, technologies or solutions"
          className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100" // Increased pl
        />
      </div>
    </Container>
  );
}