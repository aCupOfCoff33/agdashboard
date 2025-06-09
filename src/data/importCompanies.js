import axios from "axios";
import { companies } from "./backupData.js"; // Ensure 'companies' in this file have the 'website' field

const API_URL = "https://luminous-pleasure-404e32945e.strapiapp.com/api/companies";
const TOKEN = "#";

const transformCompany = (raw) => {
  // Destructure 'raw' object.
  // 'id' and 'details' are extracted specifically.
  // 'company' is also extracted (if it exists in 'raw'; based on your sample, it might not, which is fine if it's not used).
  // '...rest' will capture all other top-level properties from 'raw'.
  // This includes existing fields like 'name', 'subheading', 'logo', 'categoryId',
  // AND it will automatically include your new 'website' field if 'website' is present at the top level of 'raw'.
  const { id, details, company, ...rest } = raw;

  return {
    // Spread all properties from 'rest' (e.g., name, subheading, logo, categoryId, AND website)
    // into the top level of the new transformed object.
    ...rest,
    detail: {
      overview: details.overview,
      region: details.regions,
      risksTreatedOriginal: details.risksTreatedOriginal,
      stakeholdersImpacted: details.stakeholdersImpacted,
      phaseOfConstructionOriginal: details.phaseOfConstructionOriginal,
      costOriginal: details.costOriginal,
      originalDigitalCategory: details.originalDigitalCategory,
      employeeCount: details.employeeCount,
      solutionsImpactSummary: details.solutionsImpactSummary,
      keySolutions: details.keySolutions,
      projectIntegrationPhases: details.projectIntegrationPhases,
      risksTreatedWeb: details.risksTreatedWeb,
      costModel: [details.costModel], // details.costModel is wrapped in an array
      impactMetrics: details.impactMetrics,
      aboutCompanyText: details.aboutCompanyText,
      customerSuccessStories: details.customerSuccessStories
    }
  };
};

async function importCompanies() {
  for (const rawCompany of companies) {
    const transformed = transformCompany(rawCompany);
    try {
      const response = await axios.post(
        API_URL,
        { data: transformed }, // 'transformed' will now include 'website' if it was in 'rawCompany'
        {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      console.log(`✅ Imported: ${transformed.name} (Website: ${transformed.website || 'N/A'})`);
    } catch (err) {
      console.error(`❌ Error importing ${transformed.name}`, err.response?.data || err.message);
      // If there's a validation error from Strapi, err.response.data.error.details might give more info
      // console.error("Error details:", err.response?.data?.error?.details?.errors);
    }
  }
}

importCompanies().then(() => {
  console.log("🚀 Import process finished.");
}).catch(err => {
  console.error("Critical error during import process:", err);
});