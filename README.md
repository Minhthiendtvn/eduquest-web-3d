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

This deployment uses PHP 8.1 or newer with `PDO_MYSQL`, and a MySQL/MariaDB
database supported by your cPanel plan. Confirm those PHP extensions and
versions in **cPanel → Select PHP Version** (or ask Vietnix support) before
uploading. Node.js and PostgreSQL are not needed on the hosting account.

1. In cPanel **MySQL Databases**, create a database and a database user, assign
   the user **All Privileges**, and note the exact prefixed database name,
   username, and password.
2. Build the API-required static site locally so the browser never falls back
   to local demo accounts and shipped curriculum excludes answer keys:

   ```sh
   npm ci
   ```

   PowerShell:

   ```powershell
   $env:VITE_REQUIRE_API = "true"
   npm.cmd run build
   Remove-Item Env:VITE_REQUIRE_API
   ```

   Upload the **contents** of `dist/` to `public_html/` (including its
   `.htaccess`), and upload the repository's `api/` directory to
   `public_html/api/`. Do not upload the `database/` setup files into
   `public_html`.
3. Copy `api/config.example.php` to `eduquest-config.php` in your account
   directory, one level above `public_html`. Set the MySQL credentials, choose
   a unique initial admin username and password (at least 14 characters), and
   leave `secure_cookies` enabled when the site uses HTTPS. The config contains
   secrets and must remain outside the web root.
4. Upload the `database/` directory to a private setup directory in your
   account, for example `~/eduquest-setup/database/`. In **cPanel → Terminal**,
   run `php ~/eduquest-setup/database/install.php`. It creates the MySQL tables,
   imports the starter subjects/topics/questions, and creates the first admin.
   The script is CLI-only and will not run through a browser. If your plan does
   not include Terminal/PHP CLI access, ask Vietnix support to run it; do not
   move it into `public_html`. Keep the private setup directory backed up, or
   remove it after successful installation.
5. Open `https://your-domain.example/api/health` and confirm it returns JSON
   with `"status":"ok"`. Sign in with the initial admin account, verify learner
   registration and game progress, then change or remove the temporary setup
   password from the private config file. Changing that config value does not
   change the password hash already stored in MySQL.

The root `.htaccess` routes client-side page navigation to `index.html`; the
`api/.htaccess` sends API routes to PHP. If cPanel returns HTTP 500 immediately
after upload, inspect **Metrics → Errors** and ask Vietnix whether its Apache
configuration permits the `.htaccess` directives. Serve the site over HTTPS:
the `__Host-` authentication cookie is intentionally secure-only. Take regular
database backups from phpMyAdmin and store them outside `public_html`.

This PHP/MySQL route is separate from the Docker/Node/PostgreSQL setup described
above. Do not run both APIs against the same database; they use different
database engines.

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
