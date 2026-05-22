import directionData from '../metadata/direction.json';

/**
 * Retrieves the direction works metadata
 * @returns {Promise<Array>} List of works directed by Leyla Rangel
 */
export async function getDirectionWorks() {
  try {
    return directionData;
  } catch (error) {
    console.error('Error fetching direction works:', error);
    return [];
  }
}
