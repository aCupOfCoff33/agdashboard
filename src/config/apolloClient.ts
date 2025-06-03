// src/config/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const STRAPI_API_URL_FROM_ENV = (import.meta as any).env.VITE_STRAPI_API_URL;
const STRAPI_TOKEN_FROM_ENV = (import.meta as any).env.VITE_STRAPI_API_TOKEN;
const STRAPI_API_URL = STRAPI_API_URL_FROM_ENV || 'http://localhost:1337/graphql';
const STRAPI_TOKEN = STRAPI_TOKEN_FROM_ENV; // No fallback here, let it be undefined if not set

const httpLink = createHttpLink({
  uri: STRAPI_API_URL,
});

const authLink = setContext((_, { headers }) => {
  console.log('[ApolloClient] Setting auth header. Token present:', !!STRAPI_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: STRAPI_TOKEN ? `Bearer ${STRAPI_TOKEN}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Always include authLink, it will add header only if token exists
  cache: new InMemoryCache(),
});

export default client;