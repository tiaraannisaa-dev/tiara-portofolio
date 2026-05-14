import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    client,
    logo,
    description,
    industry,
    year,
    confidential
  }
`;

export const speakingsQuery = groq`
  *[_type == "speaking"] | order(order asc, _createdAt desc) {
    _id,
    org,
    logo,
    topic,
    year,
    link
  }
`;

export const booksQuery = groq`
  *[_type == "book"] | order(order asc, _createdAt desc) {
    _id,
    title,
    author,
    cover,
    category,
    insights,
    readDate
  }
`;

export const articlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    category,
    publishedAt,
    readingTime
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    category,
    publishedAt,
    readingTime,
    body
  }
`;
