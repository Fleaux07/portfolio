import express from "express";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, "../src/data/veille.json");
const PORT = 4322;
const ALLOWED_ORIGIN = "http://localhost:4321";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

async function readArticles() {
  const raw = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

async function writeArticles(articles) {
  await writeFile(DATA_PATH, JSON.stringify(articles, null, 2) + "\n", "utf-8");
}

app.get("/api/veille", async (req, res) => {
  try {
    res.json(await readArticles());
  } catch {
    res.status(500).json({ error: "Impossible de lire veille.json" });
  }
});

app.post("/api/veille", async (req, res) => {
  const { title, url, source, category, date, summary } = req.body ?? {};
  if (!title || !url) {
    return res.status(400).json({ error: "Titre et URL sont obligatoires." });
  }
  try {
    const articles = await readArticles();
    const article = {
      id: Date.now().toString(36),
      title: String(title),
      url: String(url),
      source: source ? String(source) : "",
      category: category ? String(category) : "",
      date: date ? String(date) : new Date().toISOString().slice(0, 10),
      summary: summary ? String(summary) : "",
    };
    articles.unshift(article);
    await writeArticles(articles);
    res.status(201).json(article);
  } catch {
    res.status(500).json({ error: "Impossible d'écrire dans veille.json" });
  }
});

app.delete("/api/veille/:id", async (req, res) => {
  try {
    const articles = await readArticles();
    const filtered = articles.filter((a) => a.id !== req.params.id);
    await writeArticles(filtered);
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Impossible d'écrire dans veille.json" });
  }
});

app.listen(PORT, () => {
  console.log(`Back office Veille : http://localhost:4321/admin/veille`);
  console.log(`API locale sur http://localhost:${PORT} (fichier : ${DATA_PATH})`);
});
