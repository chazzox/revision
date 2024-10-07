import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [tailwind()],
    server: { port: 3000 },
    output: "static",
    markdown: {
        remarkPlugins: ["remark-math"],
        rehypePlugins: ["rehype-katex"]
    }
});
