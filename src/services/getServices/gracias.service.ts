import { getAPI } from '../api';

/**
 * Retrieves the Gracias page metadata from the WordPress API
 */
export const getGraciasData = async () => {
  try {
    return await getAPI('headless/v1/leyla/pages/gracias');
  } catch (error) {
    console.error('Error fetching gracias page data:', error);
    return {};
  }
};
