// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Container from "../components/Container";
import { fetchCompanies } from "../services/companyService";
import ExpandableCardGrid from "../components/ui/expandable-card-demo-grid";
import { ICONS } from "../components/FilterButtons"; // Import ICONS for card icon logic

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
      setLoading(false);
    }).catch(err => {
      console.error("Failed to load companies on HomePage", err);
      setError("Could not load company data. Please try again later.");
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let companiesToFilter = [...allCompanies];
    const q = search.trim().toLowerCase();
    const normalizeLabel = (label) => (label || '').toLowerCase().replace(/ and /g, ' & ');

    if (q) {
      companiesToFilter = companiesToFilter.filter(
        (c) =>
          (c.name || "").toLowerCase().includes(q) ||
          (c.subheading || "").toLowerCase().includes(q) ||
          (c.details?.overview || "").toLowerCase().includes(q) ||
          (c.details?.aboutCompanyText || "").toLowerCase().includes(q) ||
          (c.details?.costOriginal || "").toLowerCase().includes(q) ||
          (c.details?.employeeCount || "").toLowerCase().includes(q) ||
          (c.details?.regions || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.risksTreatedOriginal || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.risksTreatedWeb || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.stakeholdersImpacted || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.phaseOfConstructionOriginal || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.projectIntegrationPhases || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.originalDigitalCategory || []).some(item => (item || '').toLowerCase().includes(q)) ||
          (c.details?.keySolutions || []).some(ks => (ks.title || "").toLowerCase().includes(q) || (ks.description || "").toLowerCase().includes(q)) ||
          (c.details?.impactMetrics || []).some(im => (im.metricName || "").toLowerCase().includes(q) || (im.value || "").toLowerCase().includes(q)) ||
          (c.details?.customerSuccessStories || []).some(cs => (cs.title || "").toLowerCase().includes(q) || (cs.description || "").toLowerCase().includes(q)) ||
          (c.details?.costModel && ((c.details.costModel.type || "").toLowerCase().includes(q) || (c.details.costModel.description || "").toLowerCase().includes(q)))
      );
    }

    let activeSelectedFiltersForCardIcons = new Set();
    if (!q) {
      if (categoryType === "tech" && selectedRisks.size > 0) {
        activeSelectedFiltersForCardIcons = selectedRisks;
        companiesToFilter = companiesToFilter.filter((c) => {
          const companyRisks = (c.details?.risksTreatedOriginal || []).map(normalizeLabel);
          return Array.from(selectedRisks).some((sel) =>
            companyRisks.some((r) => r.includes(normalizeLabel(sel)))
          );
        });
      } else if (categoryType === "digital" && selectedDigital.size > 0) {
        activeSelectedFiltersForCardIcons = selectedDigital;
        companiesToFilter = companiesToFilter.filter((c) => {
          const rawCats = c.details?.originalDigitalCategory;
          const companyDigitalCats = Array.isArray(rawCats) ? rawCats.map(normalizeLabel) : rawCats ? [normalizeLabel(rawCats)] : [];
          return Array.from(selectedDigital).some((sel) =>
            companyDigitalCats.some((cat) => cat.includes(normalizeLabel(sel)))
          );
        });
      }
    }

    const finalFilteredCompanies = companiesToFilter.map(company => {
      const matchingActiveFilterLabels = [];
      if (!q && activeSelectedFiltersForCardIcons.size > 0) {
        const companyCategoriesForIconMatching = categoryType === 'tech'
          ? (company.details?.risksTreatedOriginal || []).map(normalizeLabel)
          : (
              Array.isArray(company.details?.originalDigitalCategory)
              ? company.details.originalDigitalCategory
              : company.details?.originalDigitalCategory ? [company.details.originalDigitalCategory] : []
            ).map(normalizeLabel);

        activeSelectedFiltersForCardIcons.forEach(selectedLabelText => {
          if (ICONS[selectedLabelText] && companyCategoriesForIconMatching.some(compCat => compCat.includes(normalizeLabel(selectedLabelText)))) {
            matchingActiveFilterLabels.push(selectedLabelText);
          }
        });
      }
      return { ...company, matchingActiveFilterLabels };
    });
    setFiltered(finalFilteredCompanies);
  }, [allCompanies, search, categoryType, selectedRisks, selectedDigital]);

  const filterUiWrapperVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } },
  };

  const resultsGridVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.15, ease: "easeIn" } },
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
          layout="position" // Animates position based on sibling size changes
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }} // Controls speed of results grid moving up/down
        >
          <AnimatePresence mode="wait">
            {!search && (
              <motion.div
                key="filter-ui-wrapper" // Consistent key for the filter section
                variants={filterUiWrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                // style={{ overflow: 'hidden' }} // Add this back if FilterButtons height animation causes issues
              >
                <CategoryFilter
                  categoryType={categoryType}
                  setCategoryType={setCategoryType}
                  selectedRisks={selectedRisks}
                  setSelectedRisks={setSelectedRisks}
                  selectedDigital={selectedDigital}
                  setSelectedDigital={setSelectedDigital}
                  showFilters={showFilters} // Passed to CategoryFilter -> FilterButtons
                  setShowFilters={setShowFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={
                "results-content-" + // Prefix to ensure uniqueness from filter section
                search +
                categoryType +
                Array.from(selectedRisks).join("-") +
                Array.from(selectedDigital).join("-") +
                filtered.length // Add filtered.length to ensure re-render on data change
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