import { aboutMetadata } from '../metadata/about.metadata';

/**
 * Simulates fetching About data from an external API or CMS.
 */
export const getAboutData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return aboutMetadata;
};
