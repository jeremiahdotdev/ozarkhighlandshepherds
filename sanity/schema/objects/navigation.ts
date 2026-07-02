import { defineField, defineType } from "sanity";

export type Navigation = import("~/sanity.types").Navigation;

const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "object",
  fields: [
    defineField({ name: "home", title: "Home Label", type: "string" }),
    defineField({ name: "faq", title: "FAQ Label", type: "string" }),
    defineField({ name: "litters", title: "Litters Label", type: "string" }),
    defineField({ name: "puppies", title: "Puppies Label", type: "string" }),
    defineField({ name: "contact", title: "Contact Label", type: "string" }),
  ],
});

export default navigation;
