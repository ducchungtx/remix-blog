/// <reference types="vitest" />
/// <reference types="vite/client" />

import { vitePlugin as remix } from "@remix-run/dev";
// import react from "@vitejs/plugin-react";
import { remixDevTools } from "remix-development-tools";
import tsconfigPaths from "vite-tsconfig-paths";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vitest/config";

installGlobals();

export default defineConfig({
  plugins: [remixDevTools(), remix(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
  },
});
