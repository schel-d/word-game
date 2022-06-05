import express from "express";

/**
 * The main entry point for the server.
 */
export async function main() {
  console.log(`Starting...`);

  const app = express();
  const port = process.env.PORT ?? 3000;

  app.set("view engine", "pug");
  app.set("views", './pug')

  app.use(express.static("./.out/public"));

  app.get("/", (req, res) => {
    res.render("index", {})
  })

  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  })
}
