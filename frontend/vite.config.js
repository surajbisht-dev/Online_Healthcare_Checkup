import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5173, // Specify the port
    strictPort: true, // Ensure it uses the defined port
  },
});
//i - gaurav nainwal change the code of this if any problem occur in future please paste the previous code
