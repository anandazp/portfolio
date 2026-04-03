import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image(),
      date: z.date(),
      order: z.number(),
      tech: z.array(z.string()),
      contributions: z.array(z.string()).optional(),
      githubUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
