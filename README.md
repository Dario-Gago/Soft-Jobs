# Apoyo desafio Soft Jobs

# 💎 My Precious Spa - API REST

¡Bienvenido a la API RESTful de **My Precious Spa**! Esta solución moderna permite gestionar el inventario de joyas de manera eficiente, segura y escalable. Incluye paginación, filtrado avanzado, ordenamiento dinámico y respuestas con estructura HATEOAS para facilitar la integración con aplicaciones cliente.

---

## 🚀 Dependencias

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [pg](https://www.npmjs.com/package/pg)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://jwt.io/)

---

## ⚙️ Instalación rápida

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd Soft-Jobs
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto.
   - Ejemplo de configuración:
     ```env
     DB_USER=postgres
     DB_HOST=localhost
     DB_NAME=softjobs
     DB_PASS=tu_contraseña_aquí
     PORT=3000
     JWT_SECRET=az_AZ
     ```
   - **Recuerda:** Si tu usuario de PostgreSQL no tiene contraseña, deja `DB_PASS=` vacío.

---

## ▶️ Ejecución del servidor

Inicia el servidor con:

```bash
node index.js
```

El backend estará disponible en: [http://localhost:3000](http://localhost:3000)

---

## 📚 Endpoints principales

### 1. `POST /usuarios`

- Crear un usuario.
- **Body:**
  {
  "email": "admin@js.com",
  "password": "123456",
  "rol": "Frontend Developer",
  "lenguage": "JavaScript"
  }

### 2. `POST /login`

- **Body**
  {
  "email": "admin@js.com",
  "password": "123456"
  }

---

## 🗄️ Inicialización de la base de datos

Ejecuta este script en PostgreSQL para crear la base y poblarla con datos de ejemplo:

```sql
CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);

```

---

## 👨‍💻 Autor

Desarrollado por **Darío Gago** para el desafío de Soft Jobs de DesafioLatam.
