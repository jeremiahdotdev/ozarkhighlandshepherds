import { defineField, defineType } from "sanity";

export type SiteSettings = Pick<
  import("~/sanity.types").SiteSettings,
  | "title"
  | "menu"
  | "icon"
  | "next"
  | "previous"
  | "viewItem"
  | "themeToggle"
  | "moonIconAlt"
  | "sunIconAlt"
  | "defaultImageAlt"
  | "navigation"
  | "litter"
  | "copyright"
>;

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "menu", title: "Menu Label", type: "string" }),
    defineField({ name: "icon", title: "Icon Alt Label", type: "string" }),
    defineField({ name: "next", title: "Next Label", type: "string" }),
    defineField({ name: "previous", title: "Previous Label", type: "string" }),
    defineField({ name: "viewItem", title: "View Item Label", type: "string" }),
    defineField({ name: "themeToggle", title: "Theme Toggle Label", type: "string" }),
    defineField({ name: "moonIconAlt", title: "Moon Icon Alt", type: "string" }),
    defineField({ name: "sunIconAlt", title: "Sun Icon Alt", type: "string" }),
    defineField({ name: "defaultImageAlt", title: "Default Image Alt", type: "string" }),
    defineField({ name: "navigation", title: "Navigation", type: "navigation" }),
    defineField({ name: "litter", title: "Litter Labels", type: "litterLabels" }),
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
  ],
});

export default siteSettings;
