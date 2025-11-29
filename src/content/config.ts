import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projectsCollection = defineCollection({
  type: "content",
  // loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
