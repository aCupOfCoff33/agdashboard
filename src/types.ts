export interface Company {
  id: number;
  name: string;
  subheading: string;
  logo: string;
  categoryId: number;
  details: {
    overview: string;
    regions: string[];
    risksTreatedOriginal: string[];
    stakeholdersImpacted: string[];
    phaseOfConstructionOriginal: string[];
    costOriginal: string;
    originalDigitalCategory: string[] | string;
    employeeCount: string;
    solutionsImpactSummary: string;
    keySolutions: Array<{ title: string; description: string }>;
    projectIntegrationPhases: string[];
    risksTreatedWeb: string[];
    costModel: { type: string; description: string };
    impactMetrics: Array<{ metricName: string; value: string }>;
    aboutCompanyText: string;
    customerSuccessStories: Array<{ title: string; description: string; imageURL?: string }>;
  };
}