import brandData from '../metadata/brand.json';

/**
 * Retrieves the core design system tokens
 */
export async function getBrandData() {
  return brandData;
}

export function getColor(name) {
  return brandData.colors[name] || null;
}
