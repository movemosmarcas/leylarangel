import { getAPI } from '../api';

const defaultSeo = {
  siteName: "Leyla Rangel | Locutora Profesional & Directora de Doblaje",
  author: "Leyla Rangel",
  themeColor: "#FFAB8E",
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/img/hero-bg.png",
  favicon: "/favicon.png"
};

/**
 * Fetches SEO metadata dynamically from the WordPress pages API
 */
export const getSeoData = async (pageRoute: string) => {
  try {
    const slug = pageRoute === 'home' ? 'inicio' : (pageRoute === 'sobremi' ? 'sobre-mi' : pageRoute);
    const data = await getAPI(`headless/v1/leyla/pages/${slug}`);
    
    const pageSeo = data?.seo_meta || data?.seo || {};
    
    // Convert comma-separated string to list if necessary
    let keywords = pageSeo.keywords || [];
    if (typeof keywords === 'string') {
      keywords = keywords.split(',').map((k: string) => k.trim());
    }

    return {
      ...defaultSeo,
      ...pageSeo,
      keywords
    };
  } catch (error) {
    console.error('Error fetching SEO data, returning defaults:', error);
    return defaultSeo;
  }
};
