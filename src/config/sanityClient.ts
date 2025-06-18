/// <reference types="vite/client" />

// src/config/sanityClient.ts
import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing Sanity project ID or dataset. Check your .env.local file.");
}

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03', // use a UTC date in YYYY-MM-DD format
  // token: import.meta.env.VITE_SANITY_API_TOKEN, // uncomment this line if you have a token
});

export default client;