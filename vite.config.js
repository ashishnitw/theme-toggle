import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        // Commented below code. Tailwind automatically applies the dark styles when the dark class is on <html>. For this to work, we need to make changes in ThemeProvider.
        // darkMode: "class",
      },
    }),
  ],
});
