import { z, defineCollection } from "astro:content";

const note_schema = z.object({
    title: z.string(),
    description: z.string(),
    order: z.number()
});

const module_schema = z.object({
    name: z.string(),
    code: z.string(),
    url: z.string(),
    moodleURL: z.string(),
    description: z.string(),
    lectures: z.array(z.string())
});

const moduleCollection = defineCollection({
    schema: note_schema
});

const moduleInformation = defineCollection({
    schema: module_schema
});

export const collections = {
    moduleCollection,
    moduleInformation
};
