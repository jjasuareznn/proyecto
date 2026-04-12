# 🚀 Guía de CI/CD y Despliegue con GitHub Pages

Este proyecto está configurado con **GitHub Actions** para automatizar el proceso de integración continua, verificación de código y despliegue a GitHub Pages.

## 📋 Workflows Configurados

### 1. **CI/CD - Build & Deploy** (`deploy.yml`)
Se ejecuta automáticamente cuando:
- ✅ Se realiza un `push` a las ramas `main` o `develop`
- ✅ Se abre o actualiza un Pull Request
- ✅ Se ejecuta manualmente desde "Actions"

**Pasos del workflow:**
1. **Lint & Type Check**: Verifica tipos de TypeScript y linting
2. **Build Application**: Construye la aplicación
3. **Deploy to GitHub Pages**: Despliega automáticamente (solo en `main`)

### 2. **PR Checks - Code Quality** (`pr-checks.yml`)
Se ejecuta en Pull Requests para garantizar calidad:
- ✅ Verificación de tipos
- ✅ Linting
- ✅ Compilación exitosa
- ✅ Comentarios automáticos en el PR

## 🔧 Configuración

### Variables de Entorno
- `NODE_VERSION`: 20 (configurable en los workflows)

### Permisos
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## 📝 Requisitos

1. **GitHub Pages habilitado**: 
   - Ve a Settings > Pages
   - Source: GitHub Actions
   - Branch: main (o la que uses)

2. **Rama principal**: `main` o `develop`

3. **Node.js 20+** (en el entorno de CI)

## 🎯 A Automatizar

El workflow automaticamente:
- ✅ Instala dependencias (`npm ci`)
- ✅ Ejecuta verificaciones de tipos (`npm run check`)
- ✅ Ejecuta linting (`npm run lint`)
- ✅ Construye la aplicación (`npm run build`)
- ✅ Sube artefactos a GitHub Pages
- ✅ Despliega automáticamente en `main`

## 📦 Artefactos

- **Ruta de construcción**: `build/`
- **Retención**: 30 días
- **GitHub Pages URL**: `https://<usuario>.github.io/<repositorio>/`

## 🔐 Seguridad

- Solo se despliega desde la rama `main`
- Se requieren verificaciones exitosas antes del despliegue
- Los secretos se protegen automáticamente

## 📍 Archivos Importantes

- `.github/workflows/deploy.yml` - Workflow principal de CI/CD
- `.github/workflows/pr-checks.yml` - Validación en Pull Requests
- `.nojekyll` - Desactiva Jekyll para GitHub Pages (necesario para SvelteKit)
- `scripts/deploy-pages.sh` - Script manual de despliegue (opcional)

## 🚀 Cómo Usar

### Despliegue Automático
```bash
# Solo haz push a main
git push origin main
# GitHub Actions se encargará del resto
```

### Despliegue Manual (local)
```bash
bash scripts/deploy-pages.sh
```

### Ver Estados de Workflows
1. Ve a tu repositorio en GitHub
2. Click en "Actions"
3. Selecciona el workflow que quieres ver
4. Haz click en el commit para ver los detalles

## ⚠️ Solución de Problemas

### El despliegue falla
1. Verifica que GitHub Pages esté habilitado
2. Revisa los logs en "Actions" > workflow > job
3. Asegúrate de que `npm run build` funciona localmente

### La página no se actualiza
1. GitHub Pages puede tardar 1-2 minutos
2. Intenta limpiar el caché del navegador (Ctrl+Shift+R)
3. Verifica la URL en Settings > Pages

### Problemas de permisos
1. Asegúrate de tener permisos de escritura en el repositorio
2. Los tokens se generan automáticamente por GitHub

## 📚 Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [SvelteKit Adapter Static](https://kit.svelte.dev/docs/adapter-static)
