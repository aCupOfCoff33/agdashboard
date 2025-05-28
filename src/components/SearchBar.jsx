// src/components/SearchBar.jsx
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./Container";

export default function SearchBar({ defaultValue = "", onSearch }) {
  const [query, setQuery] = useState(defaultValue);

  // Live search effect
  useEffect(() => {
    const trimmed = query.trim();
    if (typeof onSearch === "function") {
      onSearch(trimmed);
    }
  }, [query, onSearch]);

  return (
    <Container>
      <div className="pt-8 w-full">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap- w-full rounded-xl bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-primary-500" style={{ height: '48px' }}>
          <div className="flex items-center gap-2 w-full">
            <Search className="h-6 w-6 text-gray-500" aria-hidden="true" />
            <input
              type="search"
              name="search"
              aria-label="Search"
              placeholder="Search companies or tech"
              className="w-full bg-transparent text-base placeholder-gray-500 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
