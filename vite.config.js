import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
    //   "proxy": {
    //     "/api":"http://localhost:4000"}
  },
  outDir: "dist", // Output folder for Vercel
  rollupOptions: {
    input: "index.html", // Ensure Vite finds the entry file
  },
  plugins: [react(),nodePolyfills()],
  define:{
    "process.env":{},
  }
});
