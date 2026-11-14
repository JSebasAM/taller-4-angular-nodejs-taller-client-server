# Taller 4 · Arquitectura Cliente - Servidor (Angular + Node.js)

[![Deploy Angular to GitHub Pages](https://github.com/JSebasAM/taller-4-angular-nodejs-taller-client-server/actions/workflows/deploy.yml/badge.svg)](https://github.com/JSebasAM/taller-4-angular-nodejs-taller-client-server/actions/workflows/deploy.yml)

Monorepo que implementa el patrón de arquitectura **Cliente-Servidor**, compuesto por un frontend en **Angular 20** (`Client-Angular`) y un backend en **Node.js con Express y TypeScript** (`Server-NodeJS`).

**Demo (Modo demo en GitHub Pages):** https://JSebasAM.github.io/taller-4-angular-nodejs-taller-client-server/

> Captura de pantalla: pendiente de agregar en `docs/screenshot.png` (`![Captura](docs/screenshot.png)`).

---

## Modo Demo (GitHub Pages)

Dado que GitHub Pages únicamente aloja contenido estático y no ejecuta entornos Node.js en servidor, el cliente Angular incluye una configuración de compilación `github-pages` (`environment.github-pages.ts` con `useMock: true`). 

Bajo este modo:
- Un interceptor HTTP intercepta las llamadas a `/api/users`, `/api/products`, `/api/providers`, `/api/orders` y `/api/tickets`.
- Devuelve datos simulados con la misma estructura tipada generada por los servicios y el Swagger del backend.
- En la parte superior de la interfaz se muestra un aviso discreto: **"Modo demo: datos simulados"**.

---

## Cómo ejecutar el servidor real y el cliente localmente

Para disfrutar de la funcionalidad completa con el servidor Node.js real:

### 1. Iniciar el Servidor Node.js (`Server-NodeJS`)

```bash
cd Server-NodeJS
npm install
npm start
```

El servidor iniciará en `http://localhost:3000` con la documentación Swagger interactiva disponible en `http://localhost:3000/api-docs`.

### 2. Iniciar el Cliente Angular (`Client-Angular`)

En otra terminal:

```bash
cd Client-Angular
npm install
npm start
```

La aplicación abrirá en `http://localhost:4200` consumiendo los endpoints reales del backend (`environment.ts` con `baseUrl: 'http://localhost:3000'` y `useMock: false`).

---

## Tecnologías

- **Frontend:** Angular 20 (componentes standalone, routing con hash, Bootstrap 5, Jest)
- **Backend:** Node.js, Express 5, TypeScript, Swagger OpenAPI 3.0, Faker
- **Calidad y CI/CD:** ESLint (`angular-eslint`), Prettier, GitHub Actions y GitHub Pages

---

## Scripts disponibles

### Cliente Angular (`Client-Angular`)

| Script                 | Descripción                                   |
| ---------------------- | --------------------------------------------- |
| `npm start`            | Inicia servidor de desarrollo Angular         |
| `npm run build`        | Build de producción para servidor local       |
| `npm run test`         | Ejecuta pruebas unitarias con Jest            |
| `npm run test:watch`   | Ejecuta pruebas en modo observador            |
| `npm run test:coverage`| Genera reporte de cobertura con Jest          |
| `npm run compodoc`     | Genera documentación de arquitectura con Compodoc |
| `npm run lint`         | Análisis estático con ESLint                  |
| `npm run format`       | Formatea el código con Prettier               |
| `npm run format:check` | Verifica formateo de código con Prettier      |

### Servidor Node.js (`Server-NodeJS`)

| Script                 | Descripción                                   |
| ---------------------- | --------------------------------------------- |
| `npm start`            | Inicia servidor Express con recarga automática|

---

## Estructura del repositorio

```
.
├── Client-Angular/           # Aplicación frontend Angular 20
│   ├── src/app/
│   │   ├── components/       # Componentes visuales reutilizables
│   │   ├── interceptors/     # clientAngularInterceptor (soporta useMock)
│   │   ├── interfaces/       # Modelos e interfaces TypeScript
│   │   ├── mocks/            # Datos simulados idénticos a Swagger
│   │   ├── pages/            # Páginas/vistas (users, products, providers, orders, tickets)
│   │   └── services/         # Servicios HTTP
│   └── src/environments/     # environment.ts y environment.github-pages.ts
├── Server-NodeJS/            # Backend Express (no modificado)
└── .github/workflows/deploy.yml
```

---

## Pipeline de Despliegue

El workflow [`deploy.yml`](.github/workflows/deploy.yml) compila y despliega exclusivamente `Client-Angular`:
1. **build**: `npm ci`, validación de lint y formato, suite completa de pruebas Jest y compilación de producción con `--configuration github-pages` y `--base-href /taller-4-angular-nodejs-taller-client-server/`.
2. **deploy**: publica el artefacto de `Client-Angular` en GitHub Pages.
3. **verify**: realiza peticiones `curl` con reintentos hasta confirmar respuesta HTTP 200 y presencia del elemento `<app-root`.

---

## Contribuir

Las contribuciones siguen la convención de [Conventional Commits](CONTRIBUTING.md).
