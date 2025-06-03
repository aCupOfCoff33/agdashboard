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

export const adaptCompany = (raw: ApiCompany): Company => {
  const { name, subheading, logo, detail } = raw;

  return {
    id: raw.documentId, // use detail.id or fallback to name
    name,
    subheading,
    logo,
    details: {
      id: raw.documentId ?? raw.detail?.id ?? raw.name,
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

export const adaptCompanies = (items: ApiCompany[]): Company[] =>
  items.map(adaptCompany);
