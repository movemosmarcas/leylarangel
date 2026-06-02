import { getAPI } from '../api';

/**
 * Retrieves TextReveal data from the WordPress API
 */
export const getTextRevealData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.text_reveal || { lines: [] };
  } catch (error) {
    console.error('Error fetching text reveal data:', error);
    return { lines: [] };
  }
};
