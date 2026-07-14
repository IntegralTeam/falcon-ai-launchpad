// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sites are served from /{repo}/ — set BASE_PATH in CI (e.g. /falcon-ai-launchpad/).
const basePath = process.env.BASE_PATH ?? "/";
// Nitro outputs to `.output/`, but TanStack Start prerender expects `dist/server/server.js`.
// Disable nitro for static GH Pages builds so prerender can run the classic dist output.
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: basePath,
    server: {
      allowedHosts: ['falcon.sfxdx.com'],
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: true,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static HTML for GitHub Pages and other static hosts
    prerender: {
      enabled: process.env.DISABLE_PRERENDER !== "true",
      // Only prerender `/` — LearnWorlds CTAs are external absolute URLs, not app routes.
      crawlLinks: false,
    },
  },
  // Top-level nitro option (not tanstackStart.nitro) — see @lovable.dev/vite-tanstack-config.
  nitro: isGitHubPagesBuild
    ? false
    : {
        // node-server for Docker, cloudflare-module for Cloudflare Workers
        preset: process.env.NITRO_PRESET ?? "cloudflare-module",
      },
});
