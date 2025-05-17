
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from "vite";

// Custom plugin to modify HTML during build
const htmlPlugin = (): Plugin => {
  return {
    name: 'html-transform',
    transformIndexHtml(html, ctx) {
      // Only modify the output in production build
      if (ctx.bundle) {
        // Remove the GPT Engineer script from production builds
        return html.replace(
          /<script src="https:\/\/cdn\.gpteng\.co\/gptengineer\.js" type="module"><\/script>/g,
          ''
        );
      }
      return html;
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    htmlPlugin(), // Add our custom HTML transform plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
