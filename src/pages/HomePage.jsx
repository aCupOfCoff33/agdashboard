// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Container from "../components/Container";
import { fetchAllCompaniesGraphQL } from "../services/companyService"; // Ensure path is correct
import ExpandableCardGrid from "../components/ui/expandable-card-demo-grid";

export default function HomePage() {
  const [allCompanies, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  const [search, setSearch] = useState("");
  const [categoryType, setCategoryType] = useState("tech");
  const [selectedRisks, setSelectedRisks] = useState(new Set());
  const [selectedDigital, setSelectedDigital] = useState(new Set());
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on new fetch
    fetchAllCompaniesGraphQL().then((data) => {
      setAll(data);
      setFiltered(data);
      setLoading(false);
    }).catch(err => {
      console.error("Failed to load companies on HomePage", err);
      setError("Could not load company data. Please try again later."); // User-friendly error
      setLoading(false);
    });
  }, []);

  // Filtering useEffect remains the same
  useEffect(() => {
    let cur = [...allCompanies];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      cur = cur.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subheading.toLowerCase().includes(q) ||
          (c.details?.overview || "").toLowerCase().includes(q)
      );
    }

    if (categoryType === "tech" && selectedRisks.size) {
      cur = cur.filter((c) => {
        const risks = (c.details?.risksTreatedOriginal || []).map((r) =>
          r.toLowerCase()
        );
        return Array.from(selectedRisks).every((sel) =>
          risks.some((r) => r.includes(sel.toLowerCase()))
        );
      });
    }

    if (categoryType === "digital" && selectedDigital.size) {
      cur = cur.filter((c) => {
        const raw = c.details?.originalDigitalCategory;
        const cats = Array.isArray(raw) ? raw : raw ? [raw] : [];
        return Array.from(selectedDigital).every((sel) =>
          cats.some((cat) =>
            (cat || "").toLowerCase().includes(sel.toLowerCase())
          )
        );
      });
    }
    setFiltered(cur);
  }, [allCompanies, search, categoryType, selectedRisks, selectedDigital]);

  const sectionVariants = { /* ... (same as before) ... */ };
  const resultsVariants = { /* ... (same as before) ... */ };

  if (loading && allCompanies.length === 0) {
    return (
      <Container>
        <div className="text-center py-10 text-gray-500">Loading companies...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="text-center py-10 text-red-500">{error}</div>
      </Container>
    );
  }

  return (
    <>
      <SearchBar onSearch={setSearch} defaultValue={search} />
      <Container>
        <AnimatePresence mode="wait">
          {!search && (
            <motion.div
              key="filters"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CategoryFilter
                categoryType={categoryType}
                setCategoryType={setCategoryType}
                selectedRisks={selectedRisks}
                setSelectedRisks={setSelectedRisks}
                selectedDigital={selectedDigital}
                setSelectedDigital={setSelectedDigital}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key="results"
            variants={resultsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filtered.length === 0 && !loading && (
                 <div className="text-center py-10 text-gray-500">No companies match your filters.</div>
            )}
            {(filtered.length > 0 || loading) && <ExpandableCardGrid companies={filtered} />}

            {loading && allCompanies.length > 0 && (
                 <div className="text-center py-2 text-gray-400 text-xs">Updating...</div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
}