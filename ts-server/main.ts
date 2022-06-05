import express from "express";

/**
 * The main entry point for the server.
 */
export async function main() {
  console.log(`Starting...`);

  const app = express();
  const port = process.env.PORT ?? 3000;

  app.get("/", (req, res) => {
    res.send("Hello world!");
  })

  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  })
}
