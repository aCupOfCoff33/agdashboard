// src/services/api.js
import { categories as appCategories, companies as appCompanies } from "../data/companyData.js"; // Updated import

/**
 * Simulates fetching categories from a backend.
 */
export const fetchCategories = () => {
  return new Promise((resolve) => {
    // Use categories from companyData.js
    setTimeout(() => resolve(appCategories), 100); // Reduced delay for faster loading
  });
};

/**
 * Simulates fetching all companies from companyData.js.
 */
export const fetchAllCompanies = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(appCompanies), 100);
  });
};

/**
 * Simulates fetching featured companies.
 * For now, let's feature the first 4 companies from companyData.js.
 * You can add a 'featured: true' flag in companyData.js later for more control.
 */
export const fetchFeaturedCompanies = () => {
  return new Promise((resolve) => {
    const featured = appCompanies.slice(0, 4).map(company => ({
      id: company.id,
      name: company.name,
      subheading: company.subheading,
      logo: company.logo, // Ensure logo path is correct or placeholder
    }));
    setTimeout(() => resolve(featured), 100);
  });
};