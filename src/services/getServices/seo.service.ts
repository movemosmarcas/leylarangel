import { seoMetadata } from '../metadata/seo.metadata';

/**
 * Simulates fetching SEO data from an external API or CMS.
 */
export const getSeoData = async (pageRoute: string) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  
  const pageMetadata = seoMetadata[pageRoute as keyof typeof seoMetadata] || seoMetadata.home;
  
  return {
    ...seoMetadata.default,
    ...pageMetadata
  };
};

