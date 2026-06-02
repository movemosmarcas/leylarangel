import { getAPI } from '../api';

/**
 * Retrieves Testimonials data from the WordPress API
 */
export const getTestimonialsData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.testimonials_group || { title: '', testimonials: [] };
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
    return { title: '', testimonials: [] };
  }
};
