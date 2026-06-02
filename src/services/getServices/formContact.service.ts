import formContactMetadata from '../metadata/formContact.metadata.json';

/**
 * Retrieves FormContact data.
 */
export const getFormContactData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return formContactMetadata;
};
