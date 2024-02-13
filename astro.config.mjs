import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  integrations: [
    alpine({
      entrypoint: "/src/entrypoint",
    }),
    compress({
      CSS: false,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: false,
    }),
  ],
});
