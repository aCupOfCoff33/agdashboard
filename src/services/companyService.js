// src/services/companyService.js
import client from '../config/sanityClient'; // Import the new Sanity client
import { adaptCompany, adaptCompanies } from '../adapters/companyAdapter';

// This GROQ projection shapes the data from Sanity to match our ApiCompany interface.
// Note the `...` to get all fields, and the special handling for images.
const companyProjection = `
  _id,
  documentId,
  name,
  subheading,
  "logo": logo.asset->url,
  website,
  detail {
    ...,
    costModel[] {
      _key,
      type,
      description
    },
    customerSuccessStories[] {
      _key,
      title,
      description,
      "imageURL": image.asset->url
    }
  }
`;

/**
 * Fetch all companies from Sanity
 */
export const fetchCompanies = async () => {
  // Fetch all documents of type 'company' and apply the projection
  const query = `*[_type == "company"] { ${companyProjection} }`;
  try {
    const data = await client.fetch(query);
    // The adapter ensures the data shape is correct for the UI
    return adaptCompanies(data || []);
  } catch (error) {
    console.error("Failed to fetch companies from Sanity:", error);
    return []; // Return an empty array on failure
  }
};

/**
 * Fetch a single company by its `documentId` field from Sanity
 */
export const fetchCompanyById = async (id) => {
  // Use a parameter `$id` to safely query for the company with the matching documentId
  const query = `*[_type == "company" && documentId == $id][0] { ${companyProjection} }`;
  const params = { id };
  try {
    const data = await client.fetch(query, params);
    // The adapter handles the single company object (or null if not found)
    return adaptCompany(data);
  } catch (error) {
    console.error(`Failed to fetch company with id ${id} from Sanity:`, error);
    return null; // Return null on failure
  }
};