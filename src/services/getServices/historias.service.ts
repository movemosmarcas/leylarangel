import { getAPI } from '../api';

/**
 * Retrieves the Historias list page metadata from the WordPress API
 */
export const getHistoriasPageData = async () => {
  try {
    return await getAPI('headless/v1/leyla/pages/historias');
  } catch (error) {
    console.error('Error fetching historias page metadata:', error);
    return {};
  }
};
