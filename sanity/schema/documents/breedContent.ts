import { defineField, defineType } from "sanity";

export type Breed = Pick<
  import("~/sanity.types").BreedContent,
  "name" | "description" | "images" | "litters"
>;

const breedContent = defineType({
  name: "breedContent",
  title: "Breed Content",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Page Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "images",
      title: "Image Paths",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "litters",
      title: "Litters",
      type: "array",
      of: [{ type: "litter" }],
    }),
  ],
});

export default breedContent;
