import { getAPI } from './api';
import ROUTES from '../lib/env';

export interface Category {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
  cat_ID: number;
  category_count: number;
  category_description: string;
  cat_name: string;
  category_nicename: string;
  category_parent: number;
}

export interface PostFields {
  subtitle?: string;
  youtube_id?: string;
}

export interface PostIndexItem {
  tag: string;
  numero: string;
  texto: string;
  id: string;
  subindex: PostIndexItem[];
}

export interface Post {
  ID: number;
  slug: string;
  title: string;
  link: string;
  excerpt: string;
  date: string;
  featured_image: string;
  fields: PostFields;
  reading_time: number;
  post_meta: any;
  author: string;
  avatar: string;
  category: Category[];
  content?: string;
  index?: PostIndexItem[];
}

export async function getWordPressPosts(): Promise<Post[]> {
  try {
    const data = await getAPI<Post[]>(ROUTES.POST + '?cpt=historia');
    return data || [];
  } catch (error) {
    console.error('Error fetching stories from WordPress:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const data = await getAPI<Post[]>(ROUTES.POST + `?cpt=historia&slug=${slug}`);
    return data && data.length > 0 ? data[0] : undefined;
  } catch (error) {
    console.error(`Error fetching story [slug: ${slug}]:`, error);
  }
}