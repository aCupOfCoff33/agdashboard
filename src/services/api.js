import { categories, companies } from "../data/sampleData";

/**
 * Simulates fetching categories from a backend.
 */
export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 300); // 300 ms artificial delay
  });
};

/**
 * Simulates fetching featured companies from a backend.
 */
export const fetchFeaturedCompanies = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(companies), 300);
  });
};