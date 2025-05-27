export interface Company {
  id: number;
  name: string;
  subheading: string;
  logo: string;
  categoryId: number;
  details: {
    overview: string;
    regions?: string[];
    risksTreatedWeb?: string[];
    costModel?: { type: string; description: string };
    keySolutions?: Array<{ title: string; description: string }>;
    customerSuccessStories?: Array<{ title: string; description: string; imageURL?: string }>;
    impactMetrics?: Array<{ metricName: string; value: string }>;
    aboutCompanyText?: string;
    // ... add other fields from companyData.js details as needed
  };
}