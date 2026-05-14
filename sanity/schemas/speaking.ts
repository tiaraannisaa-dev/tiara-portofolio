import { defineField, defineType } from "sanity";

export const speaking = defineType({
  name: "speaking",
  title: "Speaking Engagement",
  type: "document",
  fields: [
    defineField({
      name: "org",
      title: "Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Organization Logo",
      type: "image",
      options: { hotspot: true },
      description: "Optional",
    }),
    defineField({
      name: "topic",
      title: "Topic / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Speaker — Project Management Bootcamp"',
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "Optional",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Optional. Link to event, recording, or LinkedIn post",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
    select: { title: "org", subtitle: "topic", media: "logo" },
  },
});
