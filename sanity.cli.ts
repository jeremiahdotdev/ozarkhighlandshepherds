import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId:
      process.env.SANITY_STUDIO_PROJECT_ID ||
      process.env.NUXT_PUBLIC_SANITY_PROJECT_ID ||
      "your-project-id",
    dataset:
      process.env.SANITY_STUDIO_DATASET ||
      process.env.NUXT_PUBLIC_SANITY_DATASET ||
      "production",
  },
  typegen: {
    path: "./{components,composables,globals,pages,server,sanity,types}/**/*.{ts,vue}",
    schema: "./sanity.schema.json",
    generates: "./sanity.types.ts",
  },
});
