# Chileautos

Chileautos es una demo local de un buscador de autos que usa Node.js + Express en el backend y una base de datos SQLite para almacenar los vehículos.

-------------------------------------------------------
🚗 Qué hace
-------------------------------------------------------
- Muestra autos desde una base de datos local (chileautos.db)
- Permite filtrar por marca, tipo, año, precio y región
- Usa un frontend HTML/CSS sencillo (sin frameworks)
- Se ejecuta completamente de forma local

-------------------------------------------------------
⚙️ Cómo hacerlo funcionar
-------------------------------------------------------
1. Instala dependencias:
   npm install

2. Crea la base de datos:
   sqlite3 chileautos.db < db/schema.sql
   sqlite3 chileautos.db < db/seed.sql

3. Ejecuta el servidor:
   npm run dev

4. Abre en tu navegador:
   http://localhost:3000

-------------------------------------------------------
📁 Estructura
-------------------------------------------------------
chileautos/
├─ package.json
├─ server.js
├─ chileautos.db
├─ db/
│  ├─ schema.sql
│  └─ seed.sql
└─ public/
   ├─ index.html
   ├─ styles.css
   └─ images/

-------------------------------------------------------
🧩 Requisitos
-------------------------------------------------------
- Node.js 18 o superior
- SQLite instalado (sqlite3 en terminal)

-------------------------------------------------------
✅ Listo
-------------------------------------------------------
Con esto puedes correr todo el proyecto localmente,
cargar los datos de ejemplo y navegar en el buscador de autos.
