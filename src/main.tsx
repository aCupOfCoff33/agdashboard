// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App.jsx';
import apolloClient from './config/apolloClient'; // Import the client

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ApolloProvider client={apolloClient}> {/* Wrap App with ApolloProvider */}
        <App />
      </ApolloProvider>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}