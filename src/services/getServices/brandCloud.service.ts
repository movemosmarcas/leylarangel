import { getAPI } from '../api';

/**
 * Retrieves BrandCloud data from the WordPress API
 */
export const getBrandCloudData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.brand_cloud || { brands: [] };
  } catch (error) {
    console.error('Error fetching brand cloud data:', error);
    return { brands: [] };
  }
};
