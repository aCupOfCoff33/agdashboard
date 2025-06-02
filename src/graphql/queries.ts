// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies($pagination: PaginationArg) {
    companies(pagination: $pagination) { # This is the root field for your collection
      # Each item in the 'companies' array should be like a Strapi Entity
      id # ID of the Company Entity
      attributes { # Scalar fields and components are under 'attributes'
        name
        subheading
        logo
        categoryId
        detail { # The 'detail' component field
          # id # ID of the detail component instance itself, if needed
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
            # id
            title
            description
          }
          costModel {
            # id
            type
            description
          }
          impactMetrics {
            # id
            metricName
            value
          }
          customerSuccessStories {
            # id
            title
            description
            imageURL
          }
        }
      }
    }
  }
`;

export const GET_COMPANY_BY_ID = gql`
  query GetCompanyById($id: ID!) {
    company(id: $id) { # Query for a single entry
      # Structure for a single entity
      id
      attributes {
        name
        subheading
        logo
        categoryId
        detail {
          # id
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
            # id
            title
            description
          }
          costModel {
            # id
            type
            description
          }
          impactMetrics {
            # id
            metricName
            value
          }
          customerSuccessStories {
            # id
            title
            description
            imageURL
          }
        }
      }
    }
  }
`;
