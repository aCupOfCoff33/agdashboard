interface ImportMetaEnv {
  readonly VITE_STRAPI_API_TOKEN: string
  // add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}