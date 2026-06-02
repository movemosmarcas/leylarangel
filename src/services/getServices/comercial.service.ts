import { getAPI } from '../api';

/**
 * Retrieves Comercial section data from the WordPress API
 */
export const getComercialData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.comercial || { subtitle: '', title: '', intro: '', images: [], brandsTitle: '', brands: [], currentlyCard: { image: '', imageAlt: '', label: '', items: [] } };
  } catch (error) {
    console.error('Error fetching comercial data:', error);
    return { subtitle: '', title: '', intro: '', images: [], brandsTitle: '', brands: [], currentlyCard: { image: '', imageAlt: '', label: '', items: [] } };
  }
};
