import ROUTES from '../lib/env';


export async function getPagina(slug: string) {
  try {
    const url = `${ROUTES.PAGES}?slug=${slug}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching page with slug "${slug}" from WordPress:`, error);
    return null;
  }
}

/**
 * Alias de getPagina para mayor compatibilidad
 */
export async function getPaginaBySlug(slug: string) {
  return getPagina(slug);
}
