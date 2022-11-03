import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: { src: path.resolve("src/") },
  }, // https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
});
