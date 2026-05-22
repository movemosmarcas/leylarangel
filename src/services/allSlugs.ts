import { mockPosts } from "./posts";

export async function getAllSlugs(type: string): Promise<string[]> {
  return mockPosts.map(p => {
    return p.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  });
}
