/**
 * @type {import('@types/prettier').Options}
 */
module.exports = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "none",
    proseWrap: "always",
    printWidth: 85,
    plugins: [
        // require("prettier-plugin-svelte"),
        require("prettier-plugin-astro"),
        require("prettier-plugin-tailwindcss")
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
};
