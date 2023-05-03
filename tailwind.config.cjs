/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,md,svelte}"],
    theme: {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
