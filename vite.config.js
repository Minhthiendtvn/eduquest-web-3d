import { defineConfig, loadEnv } from "vite";
import { subjects } from "./src/content.js";
import { shapeLearnerCurriculum } from "./server/curriculum.js";

const apiOnlyContentModule = "\0eduquest-api-content";
const apiOnlySubjects = shapeLearnerCurriculum(subjects);

function apiOnlyContentPlugin() {
  return {
    name: "eduquest-api-only-content",
    enforce: "pre",
    resolveId(source, importer) {
      if (source === "./content.js" && importer?.replace(/\\/g, "/").endsWith("/src/main.js")) {
        return apiOnlyContentModule;
      }
      return null;
    },
    load(id) {
      if (id !== apiOnlyContentModule) return null;
      return `export const subjects = ${JSON.stringify(apiOnlySubjects)}; export const matchSets = {};`;
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const requireApi = process.env.VITE_REQUIRE_API ?? env.VITE_REQUIRE_API;
  return {
    base: process.env.GITHUB_PAGES === "true" ? "/eduquest-web-3d/" : "/",
    plugins: requireApi === "true" ? [apiOnlyContentPlugin()] : [],
    server: {
      proxy: {
        "/api": process.env.API_SERVER_URL ?? env.API_SERVER_URL ?? "http://127.0.0.1:8787",
      },
    },
  };
});
