import { defineType } from "sanity";

export type ContactPage = Pick<
  import("~/sanity.types").ContactPage,
  "image" | "title" | "content"
>;

const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    { name: "image", title: "Image Path", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "content", title: "Content", type: "array", of: [{ type: "text" }] },
  ],
});

export default contactPage;
