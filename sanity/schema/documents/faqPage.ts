import { defineType } from "sanity";

export type FaqPage = Pick<
  import("~/sanity.types").FaqPage,
  "image" | "title" | "content"
>;

const faqPage = defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  fields: [
    { name: "image", title: "Image Path", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "content", title: "Content", type: "array", of: [{ type: "text" }] },
  ],
});

export default faqPage;
