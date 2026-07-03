// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sites are served from /{repo}/ — set BASE_PATH in CI (e.g. /falcon-ai-launchpad/).
const basePath = process.env.BASE_PATH ?? "/";

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
      enabled: true,
      // Only prerender `/` — LearnWorlds CTAs are external absolute URLs, not app routes.
      crawlLinks: false,
    },
  },
  // Disable nitro. In the Lovable sandbox nitro is force-configured to emit the server
  // bundle at `dist/server/server.js` (a Cloudflare deploy target), which is where
  // TanStack Start's prerender preview server looks. Outside the sandbox nitro instead
  // emits `.output/server/index.mjs`, so the prerender crawl of `/` 500s with
  // "Failed to fetch /: Internal Server Error". We don't deploy to Cloudflare — the
  // Docker runtime is `vite preview` serving the static `dist/` output — so turning
  // nitro off lets TanStack Start produce its native `dist/server/server.js`, which the
  // prerender step can load. See ci_cd/docker/Dockerfile.
  nitro: false,
});
