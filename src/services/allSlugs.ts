import { getWordPressPosts } from "./posts";

/**
 * Retrieves all story slugs asynchronously from WordPress CPT
 */
export async function getAllSlugs(type: string): Promise<string[]> {
  const posts = await getWordPressPosts();
  return posts.map(p => {
    return p.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  });
}
