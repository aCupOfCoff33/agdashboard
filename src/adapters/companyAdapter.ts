// src/adapters/companyAdapter.ts
export interface ApiCompany {
  documentId: string;      // NEW
  name: string;
  subheading: string;
  logo: string;
  detail: {
    id: string;
    overview?: string;
    region?: string[];
    risksTreatedOriginal?: string[];
    stakeholdersImpacted?: string[];
    phaseOfConstructionOriginal?: string[];
    costOriginal?: string;
    originalDigitalCategory?: string[];
    employeeCount?: string;
    solutionsImpactSummary?: string;
    projectIntegrationPhases?: string[];
    risksTreatedWeb?: string[];
    aboutCompanyText?: string;
    keySolutions?: {
      id: string;
      title: string;
      description: string;
    }[];
    impactMetrics?: {
      id: string;
      metricName: string;
      value: string;
    }[];
    costModel?: {
      id: string;
      type: string;
      description: string;
    }[];
    customerSuccessStories?: {
      id: string;
      title: string;
      description: string;
      imageURL: string;
    }[];
  };
}

export interface Company {
  id: string; // uses detail.id
  name: string;
  subheading: string;
  logo: string;
  details: {
    id: string;
    overview: string;
    regions: string[];
    risksTreatedOriginal: string[];
    stakeholdersImpacted: string[];
    phaseOfConstructionOriginal: string[];
    costOriginal: string;
    originalDigitalCategory: string[];
    employeeCount: string;
    solutionsImpactSummary: string;
    projectIntegrationPhases: string[];
    risksTreatedWeb: string[];
    aboutCompanyText: string;
    keySolutions: ApiCompany['detail']['keySolutions'];
    impactMetrics: ApiCompany['detail']['impactMetrics'];
    costModel: { id: string; type: string; description: string };
    customerSuccessStories: ApiCompany['detail']['customerSuccessStories'];
  };
}

export const adaptCompany = (raw: ApiCompany | null): Company | null => {
  if (!raw) {
    console.error("adaptCompany received null raw data");
    return null; // Or throw an error, or return a default Company structure
  }

  const { name, subheading, logo, detail } = raw;

  // Ensure documentId is a string and not undefined/null before using it.
  // The primary fix (fetching documentId in GET_ALL_COMPANIES) should prevent this,
  // but this makes the adapter more robust.
  const companyId = String(raw.documentId ?? detail?.id ?? name ?? Math.random().toString());


  return {
    id: companyId,
    name: name ?? 'Unnamed Company',
    subheading: subheading ?? '',
    logo: logo ?? '',
    details: {
      id: companyId, // Use the same derived companyId
      overview: detail?.overview ?? '',
      regions: detail?.region ?? [],
      risksTreatedOriginal: detail?.risksTreatedOriginal ?? [],
      stakeholdersImpacted: detail?.stakeholdersImpacted ?? [],
      phaseOfConstructionOriginal: detail?.phaseOfConstructionOriginal ?? [],
      costOriginal: detail?.costOriginal ?? '',
      originalDigitalCategory: detail?.originalDigitalCategory ?? [],
      employeeCount: detail?.employeeCount ?? '',
      solutionsImpactSummary: detail?.solutionsImpactSummary ?? '',
      projectIntegrationPhases: detail?.projectIntegrationPhases ?? [],
      risksTreatedWeb: detail?.risksTreatedWeb ?? [],
      aboutCompanyText: detail?.aboutCompanyText ?? '',
      keySolutions: detail?.keySolutions ?? [],
      impactMetrics: detail?.impactMetrics ?? [],
      costModel:
        detail?.costModel && detail.costModel.length > 0
          ? detail.costModel[0]
          : { id: '', type: '', description: '' },
      customerSuccessStories: detail?.customerSuccessStories ?? [],
    },
  };
};

export const adaptCompanies = (items: (ApiCompany | null)[]): Company[] =>
  items.map(item => adaptCompany(item)).filter(Boolean) as Company[]; // Filter out any nulls if adaptCompany can return null