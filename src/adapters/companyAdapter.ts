// src/adapters/companyAdapter.ts

// This interface now perfectly matches a document returned from Sanity
// based on your schema and our upcoming GROQ query.
export interface ApiCompany {
  _id: string; // Sanity's internal unique ID
  documentId: string; // Your custom 'documentId' field for routing/linking
  name?: string;
  subheading?: string;
  logo?: string; // This will be a URL string from our GROQ query
  website?: string;
  detail?: {
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
      _key: string; // Sanity's key for array items
      title: string;
      description: string;
    }[];
    impactMetrics?: {
      _key: string;
      metricName: string;
      value: string;
    }[];
    // Your schema confirms this is an array
    costModel?: {
      _key: string;
      type: string;
      description: string;
    }[];
    customerSuccessStories?: {
      _key: string;
      title: string;
      description: string;
      imageURL: string; // We will rename 'image' to 'imageURL' in the query
    }[];
  };
}

// This interface DOES NOT CHANGE. It's what your components use.
export interface Company {
  id: string; // Will use 'documentId' from Sanity
  name: string;
  subheading: string;
  logo: string;
  website: string;
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
    keySolutions: { title: string; description: string; }[];
    impactMetrics: { metricName: string; value: string; }[];
    costModel: { id: string; type: string; description: string };
    customerSuccessStories: { title: string; description: string; imageURL?: string }[];
  };
}

export const adaptCompany = (raw: ApiCompany | null): Company | null => {
  if (!raw) {
    console.error("adaptCompany received null raw data");
    return null;
  }

  // Use your custom `documentId` field as the primary ID for the app.
  // Fallback to Sanity's `_id` if `documentId` is missing.
  const companyId = raw.documentId || raw._id;
  const { name, subheading, logo, website, detail } = raw;

  return {
    id: companyId,
    name: name ?? 'Unnamed Company',
    subheading: subheading ?? '',
    logo: logo ?? '', // This is now a direct URL from the query
    website: website ?? '',
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
      // The schema says costModel is an array. We'll take the first item.
      costModel:
        detail?.costModel && detail.costModel.length > 0
          ? { id: detail.costModel[0]._key, ...detail.costModel[0] }
          : { id: '', type: '', description: '' },
      // The schema says customerSuccessStories has `image`, which we rename to `imageURL` in the query
      customerSuccessStories: detail?.customerSuccessStories ?? [],
    },
  };
};

export const adaptCompanies = (items: (ApiCompany | null)[]): Company[] =>
  items.map(item => adaptCompany(item)).filter(Boolean) as Company[];