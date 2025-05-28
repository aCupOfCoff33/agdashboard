import { SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function CategoryTabs({ categoryType, setCategoryType, showFilters, setShowFilters }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <button
        onClick={() => setShowFilters((p) => !p)}
        className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 flex-shrink-0"
        aria-label="Toggle filter visibility"
      >
        <SlidersHorizontal className="h-6 w-6 text-neutral-800" />
      </button>

      <div className="flex flex-grow h-18 sm:h-12 rounded-full bg-gray-100 relative overflow-hidden">
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md"
          layout
          layoutId="categoryTab"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: "calc(50% - 0.5rem)",
            left: categoryType === "tech" ? "0.25rem" : "calc(50% + 0.25rem)",
          }}
        />
        <button
          onClick={() => setCategoryType("tech")}
          className={`z-10 flex-1 px-5 text-base font-medium rounded-full transition-colors ${
            categoryType === "tech" ? "text-black" : "text-gray-600"
          }`}
        >
          Tech Risk Categories
        </button>
        <button
          onClick={() => setCategoryType("digital")}
          className={`z-10 flex-1 px-5 text-base font-medium rounded-full transition-colors ${
            categoryType === "digital" ? "text-black" : "text-gray-600"
          }`}
        >
          Digital Categories
        </button>
      </div>
    </div>
  );
}
