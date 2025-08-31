## Notes

When you use Tailwind v4 (the new release) with the @tailwindcss/vite plugin, you do not need PostCSS config anymore.
In Tailwind v3 and earlier, Tailwind was a PostCSS plugin. You needed a `postcss.config.js`.
In Tailwind v4, Tailwind ships as a standalone engine and provides official integrations (`@tailwindcss/vite`, `@tailwindcss/webpack`, etc).
These plugins inject Tailwind directly into your build tool (Vite, Webpack, etc.) — so you don’t need to install `postcss` or `autoprefixer` yourself unless you specifically want to use other PostCSS plugins.

- No postcss.config.js needed.
- No autoprefixer needed (it’s built-in).
