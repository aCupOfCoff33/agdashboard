// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// REMOVE: import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App.jsx';
// REMOVE: import apolloClient from './config/apolloClient';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* REMOVE: <ApolloProvider client={apolloClient}> */}
        <App />
      {/* REMOVE: </ApolloProvider> */}
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}