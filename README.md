# Arquitectura frontend lista para crecer sin mezclar UI con negocio

Base SvelteKit con arquitectura `feature-first/domain-first` para integrar la API de Rick and Morty.

Repositorio: https://github.com/jjasuareznn/proyecto

## Run

```bash
npm install
npm run dev
```

## Check

```bash
npm run check
npm run build
```

## CI/CD

El proyecto queda preparado para CI/CD con GitHub Actions y despliegue automatico en GitHub Pages usando el workflow [`deploy.yml`](./.github/workflows/deploy.yml).

Pasos en GitHub:

```text
Settings > Pages > Build and deployment > Source = GitHub Actions
```

Cada push a `main` ejecuta:

- instalacion de dependencias con `npm ci`
- validacion con `npm run lint`
- build estatico con `npm run build`
- publicacion del directorio `build` en GitHub Pages

## Estructura

- `src/lib/core`: cliente HTTP, configuracion y adaptadores.
- `src/lib/entities`: tipos y mapeos de dominio.
- `src/lib/features`: features por caso de uso.
- `src/routes`: composicion de rutas y carga de datos.
