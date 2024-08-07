import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { SourceMap } from "module";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "dist",
  },
  server: {
    host: "192.168.1.14",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
