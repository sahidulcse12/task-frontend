import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // <-- change the dev server port
    strictPort: true, // fail if port 5174 is already in use
  },
});
