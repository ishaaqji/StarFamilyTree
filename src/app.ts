import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    service: "star-shajara",
    status: "ok",
    stage: "architectural-scaffold"
  });
});

app.listen(port, () => {
  console.log(`Star Shajara scaffold listening on port ${port}`);
});
