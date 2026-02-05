# 🚀 DevHub - Soluciones Digitales

Landing page profesional para DevHub desarrollada con **Astro** + **Tailwind CSS** + **Modo Oscuro**.

## 📁 Estructura del Proyecto

```
devhub/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación y tema
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Hero.astro       # Sección principal
│   │   ├── ServiceCard.astro
│   │   ├── FeatureCard.astro
│   │   └── TeamMember.astro
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── assets/              # Imágenes y recursos
├── public/
│   └── favicon.svg
├── package.json
├── tailwind.config.mjs      # Configuración Tailwind
└── astro.config.mjs         # Configuración Astro
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar servidor de desarrollo

```bash
npm run dev
```

Tu sitio estará disponible en: **http://localhost:4321**

### 3. Build para producción

```bash
npm run build
```

## 🎨 Modo Oscuro

El modo oscuro está implementado con:
- **Tailwind CSS** usando la clase `dark:`
- Persistencia en `localStorage`
- Detección automática de preferencia del sistema
- Toggle en el header

## ✏️ Personalización

### Cambiar colores

Editá `tailwind.config.mjs`:

```js
colors: {
  primary: {
    DEFAULT: '#FFC107',  // Cambiá estos valores
    dark: '#FFA000',
    light: '#FFD54F',
  }
}
```

### Modificar contenido

Los datos están en `src/pages/index.astro`:
- **services**: Array de servicios
- **features**: Características
- **technologies**: Tecnologías
- **team**: Miembros del equipo

### Agregar nuevos componentes

```bash
# Crear nuevo componente
touch src/components/MiComponente.astro
```

Ejemplo básico:
```astro
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<div class="bg-white dark:bg-dark p-4">
  <h3>{title}</h3>
</div>
```

## 📱 Datos de Contacto

Actualizá estos valores en `src/pages/index.astro`:

```html
<!-- WhatsApp -->
<a href="https://wa.me/5493834XXXXXX">

<!-- Email -->
<a href="mailto:tu-email@devhub.com.ar">
```

## 🌐 Deploy

### Netlify (Recomendado)

1. **Push a GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/devhub.git
git push -u origin main
```

2. **Conectar con Netlify**:
   - Andá a https://app.netlify.com/
   - "Add new site" → "Import an existing project"
   - Seleccioná tu repositorio
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Deploy!

### Vercel

```bash
npm install -g vercel
vercel
```

## 📦 Comandos Disponibles

| Comando           | Descripción                              |
|-------------------|------------------------------------------|
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor de desarrollo                   |
| `npm run build`   | Build para producción                    |
| `npm run preview` | Preview del build localmente             |

## 🎯 Características

✅ Diseño moderno y profesional  
✅ Modo oscuro con persistencia  
✅ 100% responsive  
✅ Tailwind CSS para estilos  
✅ Componentes modulares  
✅ SEO optimizado  
✅ Navegación suave  
✅ Performance optimizado  

## 🔧 Tecnologías

- **Astro** - Framework principal
- **Tailwind CSS** - Estilos
- **TypeScript** - Types (opcional)

## 📚 Recursos

- [Documentación Astro](https://docs.astro.build)
- [Documentación Tailwind](https://tailwindcss.com/docs)
- [Deploy en Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Deploy en Vercel](https://docs.astro.build/en/guides/deploy/vercel/)

## 💡 Tips

1. **Optimizar imágenes**: Convertí a WebP antes de agregar
2. **Testing responsive**: Usá Chrome DevTools
3. **Performance**: Corré Lighthouse en Chrome
4. **Git**: Hacé commits frecuentes

## 📍 Ubicación

**Catamarca Capital, Argentina** 🇦🇷

---

¡Desarrollado con 💛 por DevHub!