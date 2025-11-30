import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  // loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    tech: z.array(z.string()),
    features: z.array(z.string()),
    learnings: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    projectURL: z.string().url().optional(),
    githubURL: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
