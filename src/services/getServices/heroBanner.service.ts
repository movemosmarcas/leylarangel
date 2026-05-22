import { heroBannerMetadata } from '../metadata/heroBanner.metadata';

/**
 * Simulates fetching HeroBanner data from an external API or CMS.
 */
export const getHeroBannerData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return heroBannerMetadata;
};
