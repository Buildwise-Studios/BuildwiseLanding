import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Only add cartographer in development on Replit
//  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
   // try {
     // const { cartographer } = await import("@replit/vite-plugin-cartographer");
    //  plugins.push(cartographer());
   // } catch (error) {
  //    console.warn("Failed to load cartographer plugin:", error.message);
 //   }
 // }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      host: '0.0.0.0', // Expose to external network (important for Replit)
      port: Number(process.env.PORT) || 5173, // Use Replit's assigned port if available
      allowedHosts: [
        ".replit.dev", // Allow all Replit subdomains with wildcard
      ],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});