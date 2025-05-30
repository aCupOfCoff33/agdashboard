import axios from "axios";
import { companies } from "./companyData.js";

const API_URL = "http://localhost:1337/api/companies";
const TOKEN = process.env.STRAPIAPI;

const transformCompany = (raw) => {
  const { id, details, ...rest } = raw;

  return {
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
      costModel: [details.costModel],
      impactMetrics: details.impactMetrics,
      aboutCompanyText: details.aboutCompanyText,
      customerSuccessStories: details.customerSuccessStories
    }
  };
};

for (const rawCompany of companies) {
  const transformed = transformCompany(rawCompany);
  try {
    const response = await axios.post(
      API_URL,
      { data: transformed },
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );
    console.log(`✅ Imported: ${transformed.name}`);
  } catch (err) {
    console.error(`❌ Error importing ${transformed.name}`, err.response?.data || err.message);
  }
}
