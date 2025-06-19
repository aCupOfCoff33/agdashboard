// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Container from "../components/Container";
import { fetchCompanies } from "../services/companyService";
import ExpandableCardGrid from "../components/ui/expandable-card-demo-grid";
import { ICONS as FilterButtonICONS } from "../components/FilterButtons"; // Renamed import for clarity

export default function HomePage() {
  const [allCompanies, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryType, setCategoryType] = useState("tech");
  const [selectedRisks, setSelectedRisks] = useState(new Set());
  const [selectedDigital, setSelectedDigital] = useState(new Set());
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCompanies().then((data) => {
      setAll(data);
      setLoading(false); // Initial filtering will happen in the next useEffect
    }).catch(err => {
      console.error("Failed to load companies on HomePage", err);
      setError("Could not load company data. Please try again later.");
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let companiesToFilter = [...allCompanies];
    const query = search.trim().toLowerCase();
    // Normalize label for consistent matching with ICONS keys (uses '&')
    const normalizeLabel = (label) => (label || '').toLowerCase().replace(/ and /g, ' & ');

    // 1. Search Filter (Comprehensive)
    if (query) {
      companiesToFilter = companiesToFilter.filter(
        (c) =>
          (c.name || "").toLowerCase().includes(query) ||
          (c.subheading || "").toLowerCase().includes(query) ||
          (c.details?.overview || "").toLowerCase().includes(query) ||
          (c.details?.aboutCompanyText || "").toLowerCase().includes(query) ||
          (c.details?.costOriginal || "").toLowerCase().includes(query) ||
          (c.details?.employeeCount || "").toLowerCase().includes(query) ||
          (c.details?.regions || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.risksTreatedOriginal || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.risksTreatedWeb || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.stakeholdersImpacted || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.phaseOfConstructionOriginal || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.projectIntegrationPhases || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.originalDigitalCategory || []).some(item => (item || '').toLowerCase().includes(query)) ||
          (c.details?.keySolutions || []).some(ks => (ks.title || "").toLowerCase().includes(query) || (ks.description || "").toLowerCase().includes(query)) ||
          (c.details?.impactMetrics || []).some(im => (im.metricName || "").toLowerCase().includes(query) || (im.value || "").toLowerCase().includes(query)) ||
          (c.details?.customerSuccessStories || []).some(cs => (cs.title || "").toLowerCase().includes(query) || (cs.description || "").toLowerCase().includes(query)) ||
          (c.details?.costModel && ((c.details.costModel.type || "").toLowerCase().includes(query) || (c.details.costModel.description || "").toLowerCase().includes(query)))
      );
    }

    // 2. Category Filters (only if not searching) - Using OR logic
    let activeSelectedFiltersForCardIcons = new Set();
    if (!query) {
      if (categoryType === "tech" && selectedRisks.size > 0) {
        activeSelectedFiltersForCardIcons = selectedRisks;
        companiesToFilter = companiesToFilter.filter((c) => {
          const companyRisks = (c.details?.risksTreatedOriginal || []).map(normalizeLabel);
          return Array.from(selectedRisks).some((sel) => // OR logic
            companyRisks.some((r) => r.includes(normalizeLabel(sel)))
          );
        });
      } else if (categoryType === "digital" && selectedDigital.size > 0) {
        activeSelectedFiltersForCardIcons = selectedDigital;
        companiesToFilter = companiesToFilter.filter((c) => {
          const rawCats = c.details?.originalDigitalCategory;
          const companyDigitalCats = Array.isArray(rawCats) ? rawCats.map(normalizeLabel) : rawCats ? [normalizeLabel(rawCats)] : [];
          return Array.from(selectedDigital).some((sel) => // OR logic
            companyDigitalCats.some((cat) => cat.includes(normalizeLabel(sel)))
          );
        });
      }
    }
    
    // 3. Augment for card icons
    const finalFilteredCompanies = companiesToFilter.map(company => {
      const matchingActiveFilterLabels = [];
      if (!query && activeSelectedFiltersForCardIcons.size > 0) {
        const companyCategoriesForIconMatching = categoryType === 'tech'
          ? (company.details?.risksTreatedOriginal || []).map(normalizeLabel)
          : (
              Array.isArray(company.details?.originalDigitalCategory)
              ? company.details.originalDigitalCategory
              : company.details?.originalDigitalCategory ? [company.details.originalDigitalCategory] : []
            ).map(normalizeLabel);

        activeSelectedFiltersForCardIcons.forEach(selectedLabelText => {
          // Use the imported ICONS object correctly
          if (FilterButtonICONS[selectedLabelText] && companyCategoriesForIconMatching.some(compCat => compCat.includes(normalizeLabel(selectedLabelText)))) {
            matchingActiveFilterLabels.push(selectedLabelText);
          }
        });
      }
      return { ...company, matchingActiveFilterLabels };
    });

    setFiltered(finalFilteredCompanies);
  }, [allCompanies, search, categoryType, selectedRisks, selectedDigital]);

  // Variants for the wrapper of CategoryFilter (controls visibility based on search query)
  const filterUiWrapperVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } }, // Faster exit
  };

  // Variants for the results grid (company cards) - Faster animations
  const resultsGridVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }, // Faster
    exit: { opacity: 0, y: 15, transition: { duration: 0.15, ease: "easeIn" } },    // Faster
  };

  if (loading && allCompanies.length === 0) {
    return <Container><div className="text-center py-10 text-gray-500">Loading companies...</div></Container>;
  }
  if (error) {
    return <Container><div className="text-center py-10 text-red-500">{error}</div></Container>;
  }

  return (
    <>
      <SearchBar onSearch={setSearch} defaultValue={search} />
      <Container className="mt-6">
        <motion.div
          layout="position" // Key for smooth vertical adjustment of results grid
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }} // Transition for the layout shift
        >
          {/* AnimatePresence for showing/hiding the entire filter UI when search is active/inactive */}
          <AnimatePresence mode="wait">
            {!search && (
              <motion.div
                key="filter-ui-wrapper" // This key remains constant during tab switches
                variants={filterUiWrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ 
                  overflow: 'hidden',      // NEW: Ensures this wrapper clips its own content
                  position: 'relative',    // NEW: Establishes stacking context
                  zIndex: 10               // NEW: Keeps filters above cards during transition
                }} 
              >
                <CategoryFilter
                  categoryType={categoryType}
                  setCategoryType={setCategoryType}
                  selectedRisks={selectedRisks}
                  setSelectedRisks={setSelectedRisks}
                  selectedDigital={selectedDigital}
                  setSelectedDigital={setSelectedDigital}
                  showFilters={showFilters} // Controls FilterButtons' internal animation
                  setShowFilters={setShowFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* AnimatePresence for the results grid / no results message */}
          <AnimatePresence mode="wait">
            <motion.div
              key={ // This key ensures results re-animate when filter criteria change
                "results-content-" +
                search +
                categoryType +
                Array.from(selectedRisks).join("_") + // Use underscore or other safe char
                Array.from(selectedDigital).join("_") +
                filtered.length
              }
              variants={resultsGridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filtered.length === 0 && !loading && (
                <div className="text-center py-10 text-gray-500">
                  No companies match your filters.
                </div>
              )}
              {(filtered.length > 0 || (loading && allCompanies.length === 0)) && (
                <ExpandableCardGrid companies={filtered} />
              )}
              {loading && allCompanies.length > 0 && (
                <div className="text-center py-2 text-gray-400 text-xs">
                  Updating...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </>
  );
}