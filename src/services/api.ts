const BASE_URL = import.meta.env.PUBLIC_WP_API_URL || 'http://leyla-rangel.local/wp-json';

/**
 * Perform a GET request to the WordPress API
 */
export async function getAPI<T = any>(endpoint: string): Promise<T> {
  const url = `${BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json() as T;
  } catch (error) {
    console.error(`API Fetch Error [${url}]:`, error);
    throw error;
  }
}
