// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import SearchBar from "../components/SearchBar";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedCompanies from "../components/FeaturedCompanies";
import CompanyResultsGrid from "../components/CompanyResultsGrid"; // Renamed component
import Container from "../components/Container";
import { fetchAllCompanies } from "../services/api"; // Assuming this fetches all companies

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allCompanies, setAllCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllCompanies().then((data) => {
      setAllCompanies(data);
      setFilteredCompanies(data); // Initially show all companies or none if search is primary
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredCompanies([]); // Or set to allCompanies if you want to show all by default when search is empty
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = allCompanies.filter(
      (company) =>
        company.name.toLowerCase().includes(lowerCaseQuery) ||
        company.subheading.toLowerCase().includes(lowerCaseQuery) ||
        (company.details?.overview && company.details.overview.toLowerCase().includes(lowerCaseQuery)) ||
        (company.details?.keySolutions && company.details.keySolutions.some(sol => sol.title.toLowerCase().includes(lowerCaseQuery) || sol.description.toLowerCase().includes(lowerCaseQuery)))
    );
    setFilteredCompanies(results);
  }, [searchQuery, allCompanies]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Variants for Framer Motion animations
  const sectionVariants = {
    hidden: { opacity: 0, y: -20, height: 0, marginTop: 0, marginBottom: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', marginTop: '2.5rem', marginBottom: '3rem' }, // Adjust mt/mb for CategoryGrid and FeaturedCompanies
    exit: { opacity: 0, y: 20, height: 0, marginTop: 0, marginBottom: 0, transition: { duration: 0.3 } },
  };
  
  const resultsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };


  return (
    <>
      {/* Pass handleSearchChange to SearchBar */}
      <SearchBar onSearchChange={handleSearchChange} /> 
      
      <Container>
        <AnimatePresence mode="wait">
          {!searchQuery && (
            <motion.div
              key="default-sections"
              initial="visible" // Start visible
              animate="visible"
              exit="exit" // Use 'exit' variant for smooth transition out
            >
              <motion.div variants={sectionVariants} animate="visible" exit="exit">
                 <CategoryGrid />
              </motion.div>
              <motion.div variants={sectionVariants} animate="visible" exit="exit">
                 <FeaturedCompanies />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {searchQuery && (
            <motion.div
              key="search-results"
              variants={resultsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-8" // Add margin when results are shown
            >
              {isLoading ? (
                <div className="text-center py-10">Loading companies...</div>
              ) : (
                <CompanyResultsGrid companies={filteredCompanies} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}