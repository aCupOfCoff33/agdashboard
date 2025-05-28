// src/components/CategoryFilter.jsx
import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import FilterButtons from "./FilterButtons";

/**
 * CategoryFilter
 * – owns the filter chips and tab bar
 * – *delegates* selection state back to the parent via callbacks
 */
export default function CategoryFilter({
  categoryType,
  setCategoryType,
  selectedRisks,
  setSelectedRisks,
  selectedDigital,
  setSelectedDigital,
  showFilters,
  setShowFilters,
}) {
  /** Toggles whichever set is currently active (tech or digital) */
  const toggleSelection = (label) => {
    if (categoryType === "tech") {
      setSelectedRisks((prev) => {
        const ns = new Set(prev);
        ns.has(label) ? ns.delete(label) : ns.add(label);
        return ns;
      });
    } else {
      setSelectedDigital((prev) => {
        const ns = new Set(prev);
        ns.has(label) ? ns.delete(label) : ns.add(label);
        return ns;
      });
    }
  };

  /** Which items are marked selected for the active tab */
  const activeSelected =
    categoryType === "tech" ? selectedRisks : selectedDigital;

  return (
    <div className="w-full flex flex-col gap-5">
      <CategoryTabs
        categoryType={categoryType}
        setCategoryType={setCategoryType}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <FilterButtons
        categoryType={categoryType}
        showFilters={showFilters}
        selected={activeSelected}
        toggleSelection={toggleSelection}
      />
    </div>
  );
}
