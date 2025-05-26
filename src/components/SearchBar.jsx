import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function SearchBar() {
  return (
    <Container className="relative mt-6">
      <div className="relative">
        <ArrowRight className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for companies, technologies or solutions"
          className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-10 pr-4 py-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </Container>
  );
}