import { defineField, defineType } from "sanity";

export type PageContent = import("~/sanity.types").PageContent;

const pageContent = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "object",
  fields: [
    defineField({ name: "image", title: "Image Path", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});

export default pageContent;
