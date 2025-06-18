interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID: string;
  readonly VITE_SANITY_DATASET: string;
  readonly VITE_STRAPI_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}