import { getWordPressPosts } from "./posts";

/**
 * Retrieves all story slugs asynchronously from WordPress CPT
 */
export async function getAllSlugs(type: string): Promise<string[]> {
  const posts = await getWordPressPosts();
  return posts.map(p => p.slug);
}
