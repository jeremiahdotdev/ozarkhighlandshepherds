import { defineField, defineType } from "sanity";

export type Litter = import("~/sanity.types").Litter;

const litter = defineType({
  name: "litter",
  title: "Litter",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "images",
      title: "Image Paths",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "puppies",
      title: "Puppies",
      type: "array",
      of: [{ type: "puppy" }],
    }),
  ],
});

export default litter;
