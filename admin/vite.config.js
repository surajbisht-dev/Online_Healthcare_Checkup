import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5174, // Specify port
    strictPort: true, // Enforce the specified port
  },
  resolve: {
    alias: {
      fsevents: false, // Ignore fsevents import
    },
  },
  optimizeDeps: {
    exclude: ["fsevents"], // Exclude fsevents from optimization
  },
});

//some changes by gaurav nainwal
