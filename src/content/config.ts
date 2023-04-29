import { z, defineCollection } from "astro:content";

const moduleCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
});

const moduleInformation = defineCollection({
    schema: z.object({
        name: z.string(),
        code: z.string(),
        url: z.string(),
        moodleURL: z.string(),
        description: z.string(),
        lectures: z.array(z.string())
    })
});

export const collections = {
    moduleCollection,
    moduleInformation
};
