# EduQuest

EduQuest is a Vietnamese-first learning game for secondary-school students. It
includes a responsive learner experience, a broad starter subject catalogue,
short quizzes and matching games, saved progress, and a protected
administrator workspace for managing classes, learner accounts, and curriculum.

## Choose how to run it

- **Quick demo / GitHub Pages:** the Vite build is a static demo. Progress and
  curriculum edits stay in that browser's local storage; it has no real
  accounts, shared data, or secure administration.
- **Self-hosted app:** run the Node API and PostgreSQL using Docker Compose.
  Learner accounts, curriculum, and progress are stored in the database and
  shared across devices. The Docker build requires the API; it will show an
  error rather than silently switching to local demo data if the server is down.
- **Vietnix NVMe Hosting/cPanel:** use the PHP 8.1+ and MySQL/MariaDB API in
  `api/`. The cPanel guide below deploys the same frontend and learner/admin
  features without requiring Node.js or PostgreSQL on the hosting account.

## Self-host with Docker Compose

Install Docker Engine / Docker Desktop with the Compose plugin, then:

```sh
cp .env.example .env
```

Edit `.env` before starting:

- Set `POSTGRES_PASSWORD` to a fresh random password made of letters, numbers,
  and dashes. It is used in the database connection URL.
- Set `ADMIN_PASSWORD` to a unique password of at least 14 characters.
- Choose a non-default `ADMIN_USERNAME`.
- Keep `VITE_REQUIRE_API=true` for the self-hosted build so it cannot fall back
  to local demo mode.
- `REGISTRATION_ENABLED=true` lets learners create their own accounts. Set it
  to `false` to require an administrator to create every learner account.
- Set `COOKIE_SECURE=true` when serving the site over HTTPS. For local HTTP
  testing only, use `COOKIE_SECURE=false`.
- Keep `TRUST_PROXY=1` only if exactly one trusted reverse proxy sits in front
  of EduQuest. Set it to `0` when exposing the app directly.

Start the app and database:

```sh
docker compose up -d --build
docker compose logs -f app
```

Open `http://localhost:8787` for local testing, or publish the app behind an
HTTPS reverse proxy for real users. On first startup, EduQuest creates the
administrator specified by `ADMIN_USERNAME` and `ADMIN_PASSWORD`. Sign in with
that account to manage classes, learner accounts, and curriculum. Learners can
register from the sign-in page with a username, display name, grade, and a
password of at least 12 characters. A class join code is optional; teachers can
share it with learners, and EduQuest verifies that its grade matches the
learner's grade. Registration always creates a learner account, never an
administrator account. Set `REGISTRATION_ENABLED=false` in `.env` to turn off
public registration and require the administrator to create learner accounts.
To add another trusted administrator, sign in with an administrator account and
use **Quản trị → Quản trị viên**. Administrator accounts cannot be created
through public learner registration.

The PostgreSQL data is stored in the named `eduquest-postgres` volume; rebuilding
the app does not remove it. Back up before upgrades and store backups somewhere
other than the server:

```sh
docker compose exec -T db pg_dump --clean --if-exists -U eduquest -d eduquest > eduquest-backup.sql
```

Restore over the current database only after making a second copy of the current
backup. The dump's `--clean` option replaces existing schema objects and data:

```sh
docker compose stop app
docker compose exec -T db psql -U eduquest -d eduquest < eduquest-backup.sql
docker compose start app
```

To upgrade, fetch your updated source and run `docker compose up -d --build`.
To remove containers while preserving student data, use `docker compose down`.
**Do not use `docker compose down -v` unless you intend to permanently delete
the database volume and all accounts/progress.**

The app exposes `/api/health` for a database-aware health check. Production
sessions use secure, HTTP-only, same-site cookies; put the app behind HTTPS and
configure `TRUST_PROXY` correctly before exposing it publicly. Set a strong,
unique database and administrator password and restrict access to database
ports and backups.

## Deploy on Vietnix NVMe Hosting with cPanel and MySQL

The cPanel deployment uses PHP 8.1+ with `PDO_MYSQL` and MySQL/MariaDB.
Node.js is only needed on the computer that builds the upload package; the
hosting account does not need Node.js or PHP CLI.

1. In cPanel **MySQL Databases**, create a database and database user, assign
   the user **All Privileges**, and note the exact prefixed database name,
   username, and password. In cPanel, confirm PHP 8.1+ and `PDO_MYSQL` are
   enabled under **Select PHP Version → Extensions**. Enable SSL/HTTPS for the
   domain before setup.
2. On the computer with the source, build the hosting package. In PowerShell:

   ```powershell
   cd "C:\path\to\eduquest-web-3d"
   npm.cmd ci
   $env:VITE_REQUIRE_API = "true"
   npm.cmd run build
   Remove-Item Env:VITE_REQUIRE_API
   ```

   The build creates `dist/`, containing the site, `install.php`, and protected
   temporary installer data. The API-required build prevents demo-mode
   accounts and excludes answer keys from shipped frontend content.
3. In cPanel **File Manager**, open `public_html`. Back it up first if it
   already contains a website. Upload the **contents** of local `dist/`
   (including `.htaccess`) into `public_html`. Then upload the repository's
   `api/` directory into `public_html/api/`. The browser installer and its
   temporary data are included in `dist`; do not upload `.env` or the private
   configuration example.
4. Open `https://your-domain.example/install.php`. Enter the MySQL details
   from step 1, choose an admin username and a unique password of at least 14
   characters, then click **Kiểm tra và cài đặt**. The installer creates the
   schema, imports starter curriculum, creates the first administrator, and
   writes `eduquest-config.php` one directory above `public_html`. It stores
   the admin password as a hash in MySQL and does not save that password in
   the config. Installer data is blocked from web requests and deleted after
   successful installation; if `install.php` remains, delete it manually.
5. Open `https://your-domain.example/api/health` and confirm the JSON response
   contains `"status":"ok"`. Sign in with the admin credentials and test
   registration and game progress. Take regular database backups from
   phpMyAdmin and store them outside `public_html`.

If the installer reports that PHP `PDO_MYSQL` is missing, enable that PHP
extension in cPanel or ask Vietnix support. If it cannot write the private
config file, ask support to allow the website's PHP user to write to the
account directory, or have support place the generated config there. If
cPanel returns HTTP 500, inspect **Metrics → Errors** and ask whether the
hosting configuration permits `.htaccess` rewrites. Serve the site over HTTPS:
the login cookie is intentionally marked secure.

The command-line `database/install.php` remains available for accounts that
provide PHP CLI, but it is not required for the browser-based cPanel setup.
This PHP/MySQL route is separate from Docker/Node/PostgreSQL; the two APIs use
different database engines and must not share the same database.

## Run the static demo locally

The static demo requires Node.js 20.19+ or 22.12+:

```sh
npm install
npm run dev
```

Run it without a self-hosting `.env` file, or set `VITE_REQUIRE_API=false`;
the static demo intentionally uses browser-local progress.

To run the self-hosted API locally, start PostgreSQL, configure the environment
variables from `.env.example`, then run `npm run dev:api` in one terminal and
`npm run dev` in another. Vite proxies `/api` to port 8787 by default. The
database creates the initial administrator on first startup.

## Project structure and extending content

- `src/content.js` contains the starter subjects, topics, questions, answers,
  explanations, and matching pairs.
- `src/main.js` renders the responsive learner experience and orchestrates
  navigation, play, results, and progress.
- `src/admin.js` contains curriculum validation and the local/server
  administration screens.
- `server/app.js` defines the authenticated API; `server/database.js` defines
  and initializes the PostgreSQL schema.
- `server/challenges.js` creates shuffled games and calculates results from the
  server-held answer key.

Administrators can create classes and learner accounts, manage topics and
questions, inspect learner history, and export reports. Curriculum uploads are
validated before replacing the shared curriculum. Each playable topic needs at
least four questions, each with four distinct choices and an explanation.
Learner progress is calculated and stored on the server; game answer keys are
not sent to the browser before the learner answers. Self-hosted builds also
omit answer keys from the shipped curriculum bundle and learner API response.

### Starter content and references

The starter catalogue now has 60 playable topics across 14 subject areas,
including three additional topics per subject compared with the initial
catalogue; Mathematics and Science have six topics each, while the other
subjects have four. Every topic has an original five-question quiz and matching
game.
The questions and explanations are original practice material informed by the
curriculum and reference materials below; they are not a replacement for the
current grade-specific textbooks or teacher guidance.

- [Vietnam Ministry of Education and Training, Circular 32/2018/TT-BGDDT
  (official legal-document portal)](https://vbpl.vn/van-ban/chi-tiet/thong-tu-so-32-2018-tt-bgddt-ban-hanh-chuong-trinh-giao-duc-pho-thong--146721)
  — overall general-education curriculum and subject programmes.
- [Khan Academy: Statistics and probability](https://www.khanacademy.org/math/statistics-probability)
  — reference for the new mathematics topic.
- [Khan Academy: High school biology](https://www.khanacademy.org/science/hs-bio)
  — reference for ecosystem concepts in the new science topic.
- [British Council: General Education English Language Curriculum, grades
  3–12 (Ministry curriculum translation)](https://www.britishcouncil.org/sites/default/files/english_language_grade_3_12_2018-eng_translation.pdf)
  — reference for English learning outcomes and grammar coverage.

To apply the updated starter content to an existing cPanel/MySQL installation,
first export and back up its current curriculum from **Quản trị → Dữ liệu & sao
lưu**. Then import `database/mysql-starter-curriculum.json` using **Nhập tệp môn
học JSON**. This import replaces the shared curriculum with the file contents;
review and merge any custom topics before importing. It does not rerun the
installer or modify learner progress. New installations receive this content
automatically.

The included subject areas make a broad pilot menu, not a complete
grade-by-grade curriculum. Review, local demo backup/restore, and GitHub Pages
remain available in static mode; static mode is not suitable for real student
accounts or private data. Public account registration is available only when
connected to the self-hosted API.

## Development and checks

```sh
npm test
npm run build
```

Production static builds include an installable app shell and service worker.
The self-hosted Docker build marks the API as required; GitHub Pages continues
to build as a static, browser-local demo.

## Publish the static demo on GitHub Pages

The `Deploy EduQuest to GitHub Pages` workflow runs tests, builds the project
with the `/eduquest-web-3d/` project-site base path, and publishes the result
when changes reach `main` (or when the workflow is started manually). In the
repository's **Settings → Pages**, set the build and deployment source to
**GitHub Actions**. The first successful deployment is available at
`https://minhthiendtvn.github.io/eduquest-web-3d/`.
