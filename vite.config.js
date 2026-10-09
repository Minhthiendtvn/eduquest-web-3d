import { defineConfig, loadEnv } from "vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
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

function cpanelInstallerPlugin() {
  return {
    name: "eduquest-cpanel-installer",
    apply: "build",
    generateBundle() {
      const curriculum = readFileSync(resolve(process.cwd(), "database/mysql-starter-curriculum.json"), "utf8");
      const curriculumAsset = `<?php return json_decode(base64_decode('${Buffer.from(curriculum).toString("base64")}', true), true, 512, JSON_THROW_ON_ERROR);`;
      const files = [
        ["install.php", "installer/install.php"],
        ["eduquest-install/mysql-schema.sql", "database/mysql-schema.sql"],
      ];
      for (const [fileName, sourcePath] of files) {
        this.emitFile({
          type: "asset",
          fileName,
          source: readFileSync(resolve(process.cwd(), sourcePath)),
        });
      }
      this.emitFile({
        type: "asset",
        fileName: "eduquest-install/curriculum.php",
        source: curriculumAsset,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const requireApi = process.env.VITE_REQUIRE_API ?? env.VITE_REQUIRE_API;
  return {
    base: process.env.GITHUB_PAGES === "true" ? "/eduquest-web-3d/" : "/",
    plugins: requireApi === "true" ? [apiOnlyContentPlugin(), cpanelInstallerPlugin()] : [],
    server: {
      proxy: {
        // The shared non-secret taxonomy is imported as a Vite module, not an API request.
        "^/api/(?!curriculum-structure\\.json(?:\\?|$))": process.env.API_SERVER_URL ?? env.API_SERVER_URL ?? "http://127.0.0.1:8787",
      },
    },
  };
});
