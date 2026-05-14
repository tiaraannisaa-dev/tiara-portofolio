import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project (Strategy & Transformation)",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client / Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        'For confidential clients, use a generic label like "Indonesian State-Owned Enterprise"',
    }),
    defineField({
      name: "logo",
      title: "Client Logo",
      type: "image",
      options: { hotspot: true },
      description: "Optional. Will show a letter avatar if no logo is uploaded.",
    }),
    defineField({
      name: "description",
      title: "Description (1 sentence)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(280),
      description: "Short, impact-focused description of the engagement",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description:
        'Optional. e.g. "Telecommunications", "Public Sector / SOE"',
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: 'Optional. e.g. "2023" or "2022–2023"',
    }),
    defineField({
      name: "confidential",
      title: "Confidential",
      type: "boolean",
      initialValue: false,
      description: 'Show "Confidential" badge instead of revealing client identity',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "client", subtitle: "description", media: "logo" },
  },
});
