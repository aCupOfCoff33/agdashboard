// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Container from "../components/Container";
import { fetchAllCompanies } from "../services/api";
import ExpandableCardGrid from "../components/ui/expandable-card-demo-grid"; // Import the new component

// Remove or comment out the old CompanyResultsGrid
// const CompanyResultsGrid = ({ companies }) => { ... };

export default function HomePage() {
  /* ---------- master state ---------- */
  const [allCompanies, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [categoryType, setCategoryType] = useState("tech");
  const [selectedRisks, setSelectedRisks] = useState(new Set());
  const [selectedDigital, setSelectedDigital] = useState(new Set());
  const [showFilters, setShowFilters] = useState(true);

  /* ---------- load companies once ---------- */
  useEffect(() => {
    fetchAllCompanies().then((data) => {
      setAll(data);
      setFiltered(data); // start with everything visible
    });
  }, []);

  /* ---------- recompute whenever filters change ---------- */
  useEffect(() => {
    let cur = [...allCompanies];

    /* live text search (company name, subheading, overview) */
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      cur = cur.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subheading.toLowerCase().includes(q) ||
          (c.details?.overview || "").toLowerCase().includes(q)
      );
    }

    /* tech-risk chip filters */
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

    /* digital-category chip filters */
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

  /* ---------- motion variants (unchanged) ---------- */
  const sectionVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", marginTop: "1.5rem" },
    exit: { opacity: 0, y: 20, height: 0, transition: { duration: 0.3 } },
  };
  const resultsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  /* ---------- render ---------- */
  return (
    <>
      <SearchBar onSearch={setSearch} defaultValue={search} />

      <Container>
        {/* filter chips */}
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

        {/* results grid - Replace CompanyResultsGrid with ExpandableCardGrid */}
        <AnimatePresence mode="wait">
          <motion.div
            key="results"
            variants={resultsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Pass the filtered companies to the new grid component */}
            <ExpandableCardGrid companies={filtered} />
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
}