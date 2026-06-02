import { getAPI } from '../api';

/**
 * Retrieves HeroBanner data from the WordPress API
 */
export const getHeroBannerData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.hero_banner || {};
  } catch (error) {
    console.error('Error fetching hero banner data:', error);
    return {};
  }
};
