// src/types.ts
// This interface should align with the output of your adaptCompany function
export interface Company {
  id: string; // From documentId
  name: string;
  subheading: string;
  logo: string;
  website?: string; // Make optional if not all companies have it
  // categoryId?: number; // If you still need this, decide where it comes from
  details: {
    id: string; // This is the same as the top-level id now
    overview: string;
    regions: string[];
    risksTreatedOriginal: string[];
    stakeholdersImpacted: string[];
    phaseOfConstructionOriginal: string[];
    costOriginal: string;
    originalDigitalCategory: string[]; // Assuming it's always an array after adaptation
    employeeCount: string;
    solutionsImpactSummary: string;
    keySolutions?: Array<{ id: string; title: string; description: string }>; // Add id here if present
    projectIntegrationPhases: string[];
    risksTreatedWeb: string[];
    costModel?: { id: string; type: string; description: string }; // Add id here if present
    impactMetrics?: Array<{ id: string; metricName: string; value: string }>; // Add id here
    aboutCompanyText: string;
    customerSuccessStories?: Array<{ id: string; title: string; description: string; imageURL?: string }>; // Add id here
  };
}