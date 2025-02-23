import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages({
    branch: "docs",
    message: "Cyberia is Alive",
    /** @type {options: GhPagesOptions & { outDir: string } => void} */
    onPublish: (options) => {
      console.log(`🎉 Successfully deployed to ${options.branch}!`);
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  base: "/cyberia-test/",
});
