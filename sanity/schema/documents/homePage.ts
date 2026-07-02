import { defineType } from "sanity";

export type HomePage = Pick<
  import("~/sanity.types").HomePage,
  "image" | "title" | "content"
>;

const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    { name: "image", title: "Image Path", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "content", title: "Content", type: "array", of: [{ type: "text" }] },
  ],
});

export default homePage;
