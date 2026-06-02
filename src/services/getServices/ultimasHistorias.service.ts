import { getAPI } from '../api';

/**
 * Retrieves Ultimas Historias configuration from the WordPress API
 */
export const getUltimasHistoriasData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.ultimas_historias || { subtitle: '', title: '', viewAllText: '' };
  } catch (error) {
    console.error('Error fetching ultimas historias configuration:', error);
    return { subtitle: '', title: '', viewAllText: '' };
  }
};
