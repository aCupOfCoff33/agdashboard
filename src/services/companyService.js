// src/services/companyService.js
import client from '../config/apolloClient';
import { GET_ALL_COMPANIES, GET_COMPANY_BY_ID  } from '../graphql/queries';
import { adaptCompany, adaptCompanies } from '../adapters/companyAdapter';

/**
 * Fetch all companies without pagination limit
 */
export const fetchCompanies = async () => {
  const { data } = await client.query({
    query: GET_ALL_COMPANIES,
    fetchPolicy: 'network-only',
  });
  // Assuming data.companies is always an array, even if empty
  return adaptCompanies(data.companies || []);
};

/* detail – now uses company(documentId: …) */
export const fetchCompanyById = async (documentId) => {
  const { data } = await client.query({
    query: GET_COMPANY_BY_ID,
    variables: { documentId },
    fetchPolicy: 'network-only',
  });
  // data.company can be null if not found
  return adaptCompany(data.company); // adaptCompany can now handle null
};