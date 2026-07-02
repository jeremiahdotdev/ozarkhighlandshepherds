import { defineConfig } from "sanity";
import { schema } from "./sanity/schema";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NUXT_PUBLIC_SANITY_PROJECT_ID ||
  "your-project-id";

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NUXT_PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "default",
  title: "Ozark Highland Shepherds",
  projectId,
  dataset,
  schema: {
    types: schema,
  },
});
