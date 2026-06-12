import { getAPI } from '../api';
import ROUTES from '../../lib/env';

/**
 * Retrieves the Historias list page metadata from the WordPress API
 */
export const getHistoriasPageData = async () => {
  try {
    const data = await getAPI(ROUTES.PAGES + '?slug=historias');
    return data[0];
  } catch (error) {
    console.error('Error fetching historias page metadata:', error);
    return {};
  }
};
