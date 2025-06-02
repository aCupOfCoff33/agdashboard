// src/services/companyService.js
import apolloClient from '../config/apolloClient';
import { GET_ALL_COMPANIES, GET_COMPANY_BY_ID } from '../graphql/queries';
import { adaptStrapiCompanies, adaptStrapiCompany } from '../adapters/companyAdapter';
import { categories as appCategories } from "../data/companyData.js";

export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(appCategories), 50);
  });
};

export const fetchAllCompaniesGraphQL = async () => {
  try {
    console.log("[companyService] Attempting to fetch all companies with pagination variables...");
    const { data: queryDataResult } = await apolloClient.query({
      query: GET_ALL_COMPANIES,
      variables: { // <--- ENSURE THIS IS PROVIDED
        pagination: {
          page: 1,     // Default to page 1
          pageSize: 25 // Default to 25 items
        }
      }
      // fetchPolicy: 'network-only' // You can add this during debugging to bypass cache
    });

    console.log("[companyService] Raw queryDataResult:", queryDataResult); // Log the raw result

    if (queryDataResult && queryDataResult.companies) {
        console.log("[companyService] Accessing queryDataResult.companies");
        return adaptStrapiCompanies(queryDataResult.companies);
    } else if (queryDataResult && queryDataResult.data && queryDataResult.data.companies) { // Should not be needed if schema matches your GraphiQL JSON
        console.log("[companyService] Accessing queryDataResult.data.companies");
        return adaptStrapiCompanies(queryDataResult.data.companies);
    } else {
        console.warn("[companyService] 'companies' data not found in the expected GQL response structure:", queryDataResult);
        return [];
    }

  } catch (error) {
    console.error("Error fetching all companies:", error.message); // Log just the message for brevity first
    // Detailed logging (can be re-enabled if needed)
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach(({ message, locations, path, extensions }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Locations: ${JSON.stringify(locations)}, Path: ${path}, Extensions: ${JSON.stringify(extensions)}`,
        ),
      );
    }
    if (error.networkError) {
      console.error(`[Network error]: ${error.networkError.message}`, error.networkError);
      if (error.networkError.result && error.networkError.result.errors) {
        console.error('[Network error details]:', error.networkError.result.errors);
      }
    }
    // For more raw details from the error object itself:
    // console.error("Full ApolloError object:", JSON.stringify(error, null, 2));
    return [];
  }
};

export const fetchCompanyByIdGraphQL = async (companyId) => {
  try {
    console.log(`[companyService] Attempting to fetch company by ID: ${companyId}`);
    const { data: queryDataResult } = await apolloClient.query({
      query: GET_COMPANY_BY_ID,
      variables: { id: companyId },
    });

    console.log(`[companyService] Raw queryDataResult for ID ${companyId}:`, queryDataResult);

    if (queryDataResult && queryDataResult.company) {
        console.log("[companyService] Accessing queryDataResult.company");
        return adaptStrapiCompany(queryDataResult.company);
    } else if (queryDataResult && queryDataResult.data && queryDataResult.data.company) {
        console.log("[companyService] Accessing queryDataResult.data.company");
        return adaptStrapiCompany(queryDataResult.data.company);
    } else {
         console.warn(`[companyService] 'company' data not found for ID ${companyId}:`, queryDataResult);
        return null;
    }
  } catch (error) {
    console.error(`Error fetching company by ID ${companyId}:`, error.message);
    // ... (similar detailed error logging) ...
    return null;
  }
};

export const fetchFeaturedCompanies = async () => {
  const allCompanies = await fetchAllCompaniesGraphQL();
  return allCompanies.slice(0, 4).map(company => ({
    id: company.id,
    name: company.name,
    subheading: company.subheading,
    logo: company.logo,
  }));
};