import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    site: "https://rhul.chazzox.uk",
    server: {
        port: 3000
    },
    output: "static",
    adapter: vercel(),
    markdown: {
        remarkPlugins: ["remark-math"],
        rehypePlugins: ["rehype-katex"]
    }
});
