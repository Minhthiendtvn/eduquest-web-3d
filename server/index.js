import app from "./app.js";
import { initializeDatabase, pool } from "./database.js";

const port = Number(process.env.PORT ?? 8787);

try {
  await initializeDatabase();
  const server = app.listen(port, "0.0.0.0", () => {
    console.info(`EduQuest is ready on port ${port}.`);
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      server.close(async () => {
        await pool.end();
        process.exit(0);
      });
    });
  }
} catch (error) {
  console.error("EduQuest could not start. Check the database and required administrator environment variables.", error);
  await pool.end();
  process.exitCode = 1;
}
