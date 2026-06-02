import { getAPI } from '../api';

/**
 * Retrieves AudioGallery data from the WordPress API
 */
export const getAudioGalleryData = async () => {
  try {
    const data = await getAPI('headless/v1/leyla/pages/inicio');
    return data?.audio_gallery || { title: '', demos: [] };
  } catch (error) {
    console.error('Error fetching audio gallery data:', error);
    return { title: '', demos: [] };
  }
};
