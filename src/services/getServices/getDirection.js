import { getAPI } from '../api';

/**
 * Retrieves the complete direction section metadata
 * @returns {Promise<Object>} Direction metadata object
 */
export async function getDirectionData() {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.direction || null;
  } catch (error) {
    console.error('Error fetching direction data:', error);
    return null;
  }
}

/**
 * Retrieves the direction works metadata list
 * @returns {Promise<Array>} List of works directed by Leyla Rangel
 */
export async function getDirectionWorks() {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.direction?.works || [];
  } catch (error) {
    console.error('Error fetching direction works:', error);
    return [];
  }
}
