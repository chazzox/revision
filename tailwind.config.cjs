/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,mdx,svelte}"],
    theme: {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
