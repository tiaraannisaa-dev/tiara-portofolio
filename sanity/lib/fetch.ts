import { client } from "./client";
import {
  articleBySlugQuery,
  articlesQuery,
  booksQuery,
  projectsQuery,
  speakingsQuery,
} from "./queries";

export type Project = {
  _id: string;
  client: string;
  logo?: { asset: { _ref: string } };
  description: string;
  industry?: string;
  year?: string;
  confidential?: boolean;
};

export type Speaking = {
  _id: string;
  org: string;
  logo?: { asset: { _ref: string } };
  topic: string;
  year?: string;
  link?: string;
};

export type Book = {
  _id: string;
  title: string;
  author: string;
  cover?: { asset: { _ref: string } };
  category?: string;
  insights: string[];
  readDate?: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: { asset: { _ref: string } };
  category?: string;
  publishedAt: string;
  readingTime?: number;
  body?: any;
};

export async function getProjects(): Promise<Project[]> {
  if (!client) return [];
  try {
    return await client.fetch<Project[]>(projectsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getSpeakings(): Promise<Speaking[]> {
  if (!client) return [];
  try {
    return await client.fetch<Speaking[]>(speakingsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getBooks(): Promise<Book[]> {
  if (!client) return [];
  try {
    return await client.fetch<Book[]>(booksQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getArticles(): Promise<Article[]> {
  if (!client) return [];
  try {
    return await client.fetch<Article[]>(articlesQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!client) return null;
  try {
    return await client.fetch<Article | null>(
      articleBySlugQuery,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}
