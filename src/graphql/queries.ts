import { gql } from '@apollo/client';

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies {
    companies(pagination: { limit: 100 }) {
      name
      subheading
      logo
      detail {
        id
        overview
        region
        risksTreatedOriginal
        stakeholdersImpacted
        phaseOfConstructionOriginal
        costOriginal
        originalDigitalCategory
        employeeCount
        solutionsImpactSummary
        projectIntegrationPhases
        risksTreatedWeb
        aboutCompanyText
        keySolutions {
          id
          title
          description
        }
        impactMetrics {
          id
          metricName
          value
        }
        costModel {
          id
          type
          description
        }
        customerSuccessStories {
          id
          title
          description
          imageURL
        }
      }
    }
  }
`;

export const GET_COMPANY_BY_ID = gql`
  query GetCompanyByDocument($documentId: ID!) {
    company(documentId: $documentId) {
      documentId
      name
      subheading
      logo
      detail {
        id
        overview
        region
        risksTreatedOriginal
        stakeholdersImpacted
        phaseOfConstructionOriginal
        costOriginal
        originalDigitalCategory
        employeeCount
        solutionsImpactSummary
        projectIntegrationPhases
        risksTreatedWeb
        aboutCompanyText
        keySolutions {
          id
          title
          description
        }
        impactMetrics {
          id
          metricName
          value
        }
        costModel {
          id
          type
          description
        }
        customerSuccessStories {
          id
          title
          description
          imageURL
        }
      }
    }
  }
`;
