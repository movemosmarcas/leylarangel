import { getAPI } from '../api';

/**
 * Retrieves CharacterCarousel data from the WordPress API
 */
export const getCharacterCarouselData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.character_carousel || { revealTextLines: [], row1: [], row2: [] };
  } catch (error) {
    console.error('Error fetching character carousel data:', error);
    return { revealTextLines: [], row1: [], row2: [] };
  }
};
