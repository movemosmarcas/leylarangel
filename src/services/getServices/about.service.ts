import { getAPI } from '../api';

/**
 * Retrieves the full About page metadata details from the WordPress API
 */
export const getAboutData = async () => {
  try {
    return await getAPI('headless/v1/leyla/pages/sobre-mi');
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return {};
  }
};
