import { defineField, defineType } from "sanity";

export type LitterLabels = import("~/sanity.types").LitterLabels;

const litterLabels = defineType({
  name: "litterLabels",
  title: "Litter Labels",
  type: "object",
  fields: [
    defineField({ name: "price", title: "Price Label", type: "string" }),
    defineField({ name: "sex", title: "Sex Label", type: "string" }),
    defineField({ name: "nickname", title: "Nickname Label", type: "string" }),
    defineField({ name: "sold", title: "Sold Label", type: "string" }),
  ],
});

export default litterLabels;
