import { blogServicesMetadata } from '../metadata/blogServices.metadata';

/**
 * Simulates fetching Blog Services data from an external API or CMS.
 */
export const getBlogServicesData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return blogServicesMetadata;
};
