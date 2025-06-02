// src/adapters/companyAdapter.ts
import type { Company } from '../types';

// Interface for the raw company data item (Entity-like structure)
interface StrapiCompanyEntity {
  id: string;
  attributes: {
    name: string;
    subheading: string;
    logo: string;
    categoryId: number;
    detail: {
      overview: string;
      region?: string[];
      risksTreatedOriginal?: string[];
      stakeholdersImpacted?: string[];
      phaseOfConstructionOriginal?: string[];
      costOriginal?: string;
      originalDigitalCategory?: string[] | string;
      employeeCount?: string;
      solutionsImpactSummary?: string;
      keySolutions?: Array<{ id?: string; title: string; description: string }>;
      projectIntegrationPhases?: string[];
      risksTreatedWeb?: string[];
      costModel?: Array<{ id?: string; type: string; description: string }>;
      impactMetrics?: Array<{ id?: string; metricName: string; value: string }>;
      aboutCompanyText?: string;
      customerSuccessStories?: Array<{ id?: string; title: string; description: string; imageURL?: string }>;
    };
  };
}

export const adaptStrapiCompany = (strapiEntity: StrapiCompanyEntity): Company => {
  const { id, attributes } = strapiEntity;
  const { name, subheading, logo, categoryId, detail } = attributes;

  return {
    id: parseInt(id, 10),
    name,
    subheading,
    logo,
    categoryId,
    details: {
      overview: detail?.overview || '',
      regions: detail?.region || [],
      risksTreatedOriginal: detail?.risksTreatedOriginal || [],
      stakeholdersImpacted: detail?.stakeholdersImpacted || [],
      phaseOfConstructionOriginal: detail?.phaseOfConstructionOriginal || [],
      costOriginal: detail?.costOriginal || '',
      originalDigitalCategory: detail?.originalDigitalCategory || [],
      employeeCount: detail?.employeeCount || '',
      solutionsImpactSummary: detail?.solutionsImpactSummary || '',
      keySolutions: detail?.keySolutions || [],
      projectIntegrationPhases: detail?.projectIntegrationPhases || [],
      risksTreatedWeb: detail?.risksTreatedWeb || [],
      costModel: (detail?.costModel && detail.costModel.length > 0)
                   ? detail.costModel[0]
                   : { type: '', description: '' },
      impactMetrics: detail?.impactMetrics || [],
      aboutCompanyText: detail?.aboutCompanyText || '',
      customerSuccessStories: detail?.customerSuccessStories || [],
    },
  };
};

export const adaptStrapiCompanies = (strapiEntities: StrapiCompanyEntity[]): Company[] => {
  if (!strapiEntities) return [];
  return strapiEntities.map(adaptStrapiCompany);
};
