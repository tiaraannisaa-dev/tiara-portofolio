import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Strategy", value: "strategy" },
          { title: "Leadership", value: "leadership" },
          { title: "Personal Development", value: "personal-development" },
          { title: "Business", value: "business" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "insights",
      title: "Key Insights",
      type: "array",
      of: [{ type: "string" }],
      description: "2-3 short insights you took from this book",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "readDate",
      title: "Date Read",
      type: "date",
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
    select: { title: "title", subtitle: "author", media: "cover" },
  },
});
