import { getAPI } from '../api';

/**
 * Retrieves SoyLeyla data from the WordPress API
 */
export const getSoyLeylaData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.soy_leyla || {};
  } catch (error) {
    console.error('Error fetching soy leyla data:', error);
    return {};
  }
};
