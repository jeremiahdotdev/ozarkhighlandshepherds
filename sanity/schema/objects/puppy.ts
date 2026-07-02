import { defineField, defineType } from "sanity";

export type Puppy = import("~/sanity.types").Puppy;

export function isPuppy(value: any): value is Puppy {
  if (typeof value !== "object") return false;
  if (!Object.hasOwn(value, "name")) return false;
  if (!Object.hasOwn(value, "price")) return false;
  if (!Object.hasOwn(value, "images")) return false;
  return true;
}

const puppy = defineType({
  name: "puppy",
  title: "Puppy",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "nickname", title: "Nickname", type: "string" }),
    defineField({ name: "sex", title: "Sex", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({
      name: "images",
      title: "Image Paths",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "isSold", title: "Sold", type: "boolean" }),
  ],
});

export default puppy;
