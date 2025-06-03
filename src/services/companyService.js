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
  return adaptCompanies(data.companies);
};

/* detail – now uses company(documentId: …) */
export const fetchCompanyById = async (documentId) => {
  const { data } = await client.query({
    query: GET_COMPANY_BY_DOCUMENT_ID,
    variables: { documentId },
    fetchPolicy: 'network-only',
  });
  return adaptCompany(data.company);
};

