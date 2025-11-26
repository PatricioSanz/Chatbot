const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "chileautos.db");
const schemaPath = path.join(__dirname, "db", "schema.sql");
const seedPath = path.join(__dirname, "db", "seed.sql");

console.log("🔄 Reiniciando base de datos...");

// 1. Eliminar DB si existe
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log("🗑️ Base antigua eliminada.");
}

// 2. Crear nueva base vacía
const db = new Database(dbPath);
console.log("📦 Base nueva creada.");

// 3. Ejecutar schema.sql
const schema = fs.readFileSync(schemaPath, "utf8");
db.exec(schema);
console.log("📐 schema.sql ejecutado.");

// 4. Ejecutar seed.sql
const seed = fs.readFileSync(seedPath, "utf8");
db.exec(seed);
console.log("🌱 seed.sql ejecutado.");

console.log("✅ Base de datos reiniciada con éxito.");
