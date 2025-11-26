const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();
const db = new Database(path.join(__dirname, "chileautos.db"), { fileMustExist: true });
const publicDir = path.join(__dirname, "public");

app.use(express.static(publicDir));

/* ========================
   🔍 Ruta de debug (NUEVA)
   ======================== */
app.get("/debug/cars", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM cars").all();

    console.log("📌 Autos en la base de datos:");
    console.table(rows);

    res.json(rows);
  } catch (err) {
    console.error("❌ Error leyendo autos:", err);
    res.status(500).json({ error: "Error al leer los autos" });
  }
});

/* ========================
   API de autos
   ======================== */
app.get("/api/cars", (req, res) => {
  const { q = "", brand = "", type = "", region = "", year_min = "", price_max = "", sort = "recientes" } = req.query;

  const where = [];
  const params = {};

  if (q) {
    where.push(`(title LIKE @q OR brand LIKE @q OR model LIKE @q OR region LIKE @q)`);
    params.q = `%${q}%`;
  }
  if (brand) {
    where.push(`LOWER(brand) = LOWER(@brand)`);
    params.brand = brand;
  }
  if (type) {
    where.push(`LOWER(type) = LOWER(@type)`);
    params.type = type;
  }
  if (region) {
    where.push(`LOWER(region) = LOWER(@region)`);
    params.region = region;
  }
  if (year_min) {
    where.push(`year >= @year_min`);
    params.year_min = Number(year_min);
  }
  if (price_max) {
    where.push(`price_clp <= @price_max`);
    params.price_max = Number(price_max);
  }

  let orderBy = "id DESC";
  if (sort === "precio-asc") orderBy = "price_clp ASC";
  if (sort === "precio-desc") orderBy = "price_clp DESC";
  if (sort === "anio-desc") orderBy = "year DESC";
  if (sort === "anio-asc") orderBy = "year ASC";

  const sql = `
    SELECT id, title, brand, model, type, year, price_clp, region, img
    FROM cars
    ${where.length ? "WHERE " + where.join(" AND ") : ""}
    ORDER BY ${orderBy}
  `;
  const rows = db.prepare(sql).all(params);
  res.json({ count: rows.length, items: rows });
});

/* ========================
   Health check
   ======================== */
app.get("/api/health", (_req, res) => res.json({ ok: true, ts: new Date().toISOString() }));

/* ========================
   SPA fallback
   ======================== */

// --- Rutas estáticas por modelo ---
const staticModels = [
  "kia-sportage",
  "toyota-yaris",
  "chevrolet-tracker",
  "suzuki-swift",
  "nissan-navara",
  "kia-rio",
  "hyundai-tucson",
  "toyota-corolla",
  "mazda-cx-5",
  "ford-mustang",
  "honda-civic",
  "subaru-outback",
  "volkswagen-tiguan",
  "nissan-sentra",
  "toyota-prius",
  "hyundai-ioniq-hybrid",
  "kia-niro",
  "toyota-rav4-hybrid",
  "subaru-xv-hybrid",
  "nissan-leaf",
  "hyundai-kona-ev",
  "kia-ev6",
  "tesla-model-3",
  "mg-zs-ev",
  "byd-yuan-plus",
  "peugeot-e-208"
];

staticModels.forEach(model => {
  app.get(`/vehiculos/${model}`, (req, res) => {
    res.sendFile(path.join(publicDir, "vehiculos", `${model}.html`));
  });
});


app.get("*", (_req, res) => res.sendFile(path.join(publicDir, "index.html")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚗 Servidor Chileautos en http://localhost:${PORT}`));
