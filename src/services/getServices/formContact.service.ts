import { formContactMetadata } from '../metadata/formContact.metadata';

/**
 * Simulates fetching FormContact data from an external API or CMS.
 */
export const getFormContactData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return formContactMetadata;
};
