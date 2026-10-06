import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const manifestUrl = new URL("../public/manifest.webmanifest", import.meta.url);
const iconUrl = new URL("../public/icons/eduquest.svg", import.meta.url);
const htmlUrl = new URL("../index.html", import.meta.url);

test("installable web app manifest has valid identity, scope, and icon", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  assert.equal(manifest.name, "EduQuest — Học vui, chơi giỏi");
  assert.equal(manifest.short_name, "EduQuest");
  assert.equal(manifest.lang, "vi");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons.some((icon) =>
    icon.src === "./icons/eduquest.svg"
    && icon.type === "image/svg+xml"
    && icon.sizes === "any"
    && icon.purpose.includes("maskable"),
  ));
  const html = await readFile(htmlUrl, "utf8");
  assert.match(html, /href="%BASE_URL%manifest\.webmanifest"/);
  assert.match(html, /href="%BASE_URL%icons\/eduquest\.svg"/);
  assert.match(html, /class="skip-link" href="#main-content"/);
  const app = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
  assert.match(app, /<main class="main-area" id="main-content" tabindex="-1">/);
  await access(iconUrl);
});
