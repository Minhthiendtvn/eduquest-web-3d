import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const manifestUrl = new URL("../public/manifest.webmanifest", import.meta.url);
const iconUrl = new URL("../public/icons/eduquest.svg", import.meta.url);
const htmlUrl = new URL("../index.html", import.meta.url);
const appIcon192Url = new URL("../public/icons/eduquest-192.png", import.meta.url);
const appIcon512Url = new URL("../public/icons/eduquest-512.png", import.meta.url);

test("installable web app manifest has valid identity, scope, and icon", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  assert.equal(manifest.name, "EduQuest — Học vui, chơi giỏi");
  assert.equal(manifest.short_name, "EduQuest");
  assert.equal(manifest.lang, "vi");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  for (const [file, size] of [
    ["./icons/eduquest-192.png", "192x192"],
    ["./icons/eduquest-512.png", "512x512"],
  ]) {
    assert.ok(manifest.icons.some((icon) =>
      icon.src === file
      && icon.sizes === size
      && icon.type === "image/png"
      && icon.purpose.includes("maskable"),
    ));
  }
  assert.ok(manifest.icons.some((icon) =>
    icon.src === "./icons/eduquest.svg"
    && icon.type === "image/svg+xml"
    && icon.sizes === "any"
    && icon.purpose.includes("maskable"),
  ));
  const html = await readFile(htmlUrl, "utf8");
  assert.match(html, /href="%BASE_URL%manifest\.webmanifest"/);
  assert.match(html, /href="%BASE_URL%icons\/eduquest\.svg"/);
  assert.match(html, /name="apple-mobile-web-app-capable" content="yes"/);
  assert.match(html, /rel="apple-touch-icon" href="%BASE_URL%icons\/eduquest-192\.png"/);
  assert.match(html, /class="skip-link" href="#main-content"/);
  const app = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
  assert.match(app, /<main class="main-area" id="main-content" tabindex="-1">/);
  assert.match(app, /beforeinstallprompt/);
  assert.match(app, /appinstalled/);
  assert.match(app, /state\.installInstalled = true/);
  for (const [icon, size] of [[appIcon192Url, 192], [appIcon512Url, 512]]) {
    const png = await readFile(icon);
    assert.equal(png.toString("hex", 0, 8), "89504e470d0a1a0a");
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
  }
  assert.match(await readFile(new URL("../public/sw.js", import.meta.url), "utf8"), /icons\/eduquest-512\.png/);
  await access(iconUrl);
});
