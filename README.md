# 🤖 Chatbot Chileautos – Asistente de búsqueda de vehículos con IA

El **Chatbot Chileautos** es una herramienta inteligente diseñada para ayudar a los usuarios a **encontrar vehículos** de acuerdo con sus requerimientos personales (marca, precio, año, ubicación, tipo de vehículo, etc.).  
Su propósito es optimizar la experiencia de búsqueda mediante **inteligencia artificial y procesamiento de lenguaje natural (NLP)**, reduciendo el tiempo necesario para comparar opciones y centralizando la información en una sola plataforma.

---

## 🎯 Objetivos principales

- Recibir y procesar requerimientos del usuario en **lenguaje natural**.  
- Convertir las consultas en **filtros estructurados** (precio, marca, año, tipo, etc.).  
- Consultar fuentes de datos o APIs de inventario en tiempo real.  
- Entregar recomendaciones personalizadas y relevantes.  
- Escalar el chatbot a distintos canales (web, WhatsApp, aplicación móvil).  
- Aprender de las interacciones de los usuarios, respetando siempre la **privacidad de datos**.

---

## ⚙️ Stack tecnológico sugerido

- **Backend:** Node.js. 
- **NLP / LLM:** OpenAI API, Azure OpenAI o Cohere. (Verificar)  
- **Base de datos:** PostgreSQL.  
- **Infraestructura:** Render y Netlify.  
- **Integración:** API REST.  
- **Despliegue:** Render.  

---

## 📁 Estructura del repositorio

```bash
/docs
  ARCHITECTURE.md
  DATA_SCHEMA.md
  PROMPTS.md
  EVALUATION.md
  SECURITY.md
  DEPLOYMENT.md
  ROADMAP.md
/infra
  docker-compose.yml
/src
  app/            # Punto de entrada del servidor
  api/            # Endpoints REST o webhooks
  bot/            # Lógica del flujo conversacional
  nlp/            # Extracción de intención y entidades
  providers/      # Conexión a APIs externas o LLMs
  flows/          # Flujos de conversación (búsqueda, FAQ, fallback)
  utils/          # Funciones de apoyo y logging
/test
.env.example
CONTRIBUTING.md
CODE_OF_CONDUCT.md
