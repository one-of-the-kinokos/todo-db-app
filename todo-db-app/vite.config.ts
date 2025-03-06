import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((configObj) => {
  return {
    base: configObj.mode === "gh-pages" ? "/todo-deb-app" : "/",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          404: resolve(__dirname, "404.html"),
        },
      },
    },
    plugins: [
      TanStackRouterVite({
        target: "react",
        autoCodeSplitting: true,
      }),
      react(),
      tsconfigPaths(),
    ],
  };
});
