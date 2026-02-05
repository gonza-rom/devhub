# 🚀 DevHub - Soluciones Digitales

Landing page profesional para DevHub desarrollada con **Astro** + **Tailwind CSS** + **Modo Oscuro Permanente**.

## ✨ Nuevas Funcionalidades

### 🎨 Diseño Solo Modo Oscuro
- Interfaz completamente en modo oscuro para mejor experiencia visual
- Eliminado el toggle de tema claro/oscuro
- Colores optimizados para modo nocturno

### 👁️ Contador de Visitas Global
- Contador de visitas integrado en el Hero
- Utiliza API externa (CountAPI) para tracking global real
- Se actualiza automáticamente con cada visitante
- Animación suave al cargar el número

### 📧 Formulario de Contacto Funcional
- Formulario completo con validación
- Envío directo al email: **contacto@devhub.com.ar**
- Campos: Nombre, Email, Teléfono, Servicio, Mensaje
- Abre el cliente de email del usuario automáticamente

### 🎯 Sección "Ventajas sobre Plantillas"
- 9 razones detalladas por qué elegir desarrollo a medida
- Comparación directa vs. Wix, Tienda Nube, WordPress
- Destacados: velocidad, SEO, propiedad del código, escalabilidad
- Estadísticas impactantes con iconos

### 💻 Iconos en Tecnologías
- Cada tecnología ahora tiene su icono Font Awesome
- Mejor visualización y profesionalismo
- Hover effects mejorados

## 📁 Estructura del Proyecto

```
devhub/
├── src/
│   ├── components/          
│   │   ├── Header.astro     # Sin toggle de tema
│   │   ├── Footer.astro     # Modo oscuro permanente
│   │   ├── Hero.astro       # Con contador de visitas integrado
│   │   ├── ServiceCard.astro
│   │   ├── FeatureCard.astro
│   │   └── TeamMember.astro
│   ├── layouts/
│   │   └── Layout.astro     # Modo oscuro fijo
│   ├── pages/
│   │   └── index.astro      # Formulario + Ventajas + Iconos
│   └── assets/              
├── public/
│   ├── favicon.svg
│   └── logo.png             # Agregar tu logo aquí
├── package.json
├── tailwind.config.mjs      
└── astro.config.mjs         
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

## 🎨 Personalización

### Cambiar colores

Editá `tailwind.config.mjs`:

```js
colors: {
  primary: {
    DEFAULT: '#FFC107',  // Amarillo principal
    dark: '#FFA000',     // Amarillo oscuro
    light: '#FFD54F',    // Amarillo claro
  },
  dark: {
    DEFAULT: '#1a1a1a',     // Fondo principal
    secondary: '#2d2d2d',   // Fondo secundario
    tertiary: '#404040',    // Bordes y separadores
  }
}
```

### Modificar contenido

Los datos están en `src/pages/index.astro`:
- **services**: Array de servicios ofrecidos
- **features**: Características de DevHub
- **technologies**: Stack tecnológico con iconos
- **advantages**: Ventajas vs plantillas (nuevo)
- **team**: Miembros del equipo

### Configurar Email de Contacto

En `src/pages/index.astro`, buscar y modificar:

```javascript
const mailtoLink = `mailto:contacto@devhub.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

Cambiar `contacto@devhub.com.ar` por tu email.

### Configurar WhatsApp

En varios componentes, buscar y actualizar:

```html
<a href="https://wa.me/5493834946767">
```

Cambiar el número por el tuyo (formato: 549 + código área + número sin 15)

## 📊 Contador de Visitas Global

El contador usa **CountAPI** (servicio gratuito) para tracking real:

```javascript
const response = await fetch('https://api.countapi.xyz/hit/devhub.com.ar/visits');
```

**Alternativas para producción:**
- Supabase con tabla de analytics
- Firebase Realtime Database
- API propia con Node.js + MongoDB
- Google Analytics con custom metrics

### Implementar con Supabase (Recomendado)

1. Crear tabla en Supabase:
```sql
CREATE TABLE page_visits (
  id BIGSERIAL PRIMARY KEY,
  visit_count INTEGER DEFAULT 0,
  last_updated TIMESTAMP DEFAULT NOW()
);
```

2. Modificar `Hero.astro`:
```javascript
const { createClient } = await import('@supabase/supabase-js');
const supabase = createClient('TU_URL', 'TU_KEY');

// Incrementar y obtener
const { data } = await supabase
  .rpc('increment_visit_count')
  .single();
```

## 📱 Secciones de la Página

1. **Hero** - Presentación con logo, contador de visitas
2. **Servicios** - 4 servicios principales con precios
3. **Por qué DevHub** - 6 razones para elegirnos
4. **Ventajas** - 9 comparaciones vs plantillas (NUEVO)
5. **Tecnologías** - Stack con iconos (ACTUALIZADO)
6. **Nosotros** - Equipo de 2 desarrolladores
7. **Contacto** - Formulario funcional + datos de contacto (NUEVO)

## 🌐 Deploy

### Netlify (Recomendado)

1. **Push a GitHub**:
```bash
git init
git add .
git commit -m "Initial commit - DevHub v2.0"
git branch -M main
git remote add origin https://github.com/tu-usuario/devhub.git
git push -u origin main
```

2. **Conectar con Netlify**:
   - Ir a https://app.netlify.com/
   - "Add new site" → "Import an existing project"
   - Seleccionar tu repositorio
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
| `npm run dev`     | Servidor de desarrollo en :4321          |
| `npm run build`   | Build para producción                    |
| `npm run preview` | Preview del build localmente             |

## 🎯 Características Destacadas

✅ **Modo oscuro permanente** - Diseño profesional nocturno  
✅ **Contador de visitas global** - Tracking real en tiempo real  
✅ **Formulario de contacto funcional** - Envío directo a email  
✅ **9 ventajas vs plantillas** - Sección comparativa única  
✅ **Iconos en tecnologías** - Mejor experiencia visual  
✅ **100% responsive** - Mobile, tablet, desktop  
✅ **SEO optimizado** - Meta tags y estructura correcta  
✅ **Performance** - Carga ultra rápida con Astro  
✅ **Animaciones suaves** - Scroll reveals y transitions  

## 🔧 Tecnologías Utilizadas

- **Astro 5.1** - Framework principal (SSG)
- **Tailwind CSS 3.4** - Estilos utility-first
- **Font Awesome 6.5** - Iconos profesionales
- **CountAPI** - Contador de visitas (gratis)
- **TypeScript** - Type safety (opcional)

## 💡 Tips de Uso

1. **Logo**: Colocar `logo.png` en carpeta `/public/`
2. **Favicon**: Actualizar `/public/favicon.svg`
3. **Google Analytics**: Agregar en `Layout.astro`
4. **Colores de marca**: Modificar `tailwind.config.mjs`
5. **Contador persistente**: Migrar a Supabase en producción

## 📍 Contacto DevHub

- 📧 **Email**: contacto@devhub.com.ar
- 📱 **WhatsApp**: +54 9 383 4946767
- 🌐 **Ubicación**: Catamarca Capital, Argentina
- 💼 **LinkedIn**: [Gonzalo Romero](https://www.linkedin.com/in/gonzaloromero-/)

## 🆕 Changelog v2.0

### Agregado
- ✨ Contador de visitas global en Hero
- 📝 Formulario de contacto funcional
- 🏆 Sección "9 Ventajas vs Plantillas"
- 🎨 Iconos en todas las tecnologías
- 🌙 Modo oscuro como único tema

### Modificado
- 🎨 Header sin toggle de tema
- 🎨 Footer adaptado a modo oscuro
- 📱 Navegación actualizada con nueva sección "Ventajas"

### Eliminado
- ❌ Toggle de modo claro/oscuro
- ❌ Componente VisitorCounter separado (integrado en Hero)
- ❌ Estilos de modo claro

---

¡Desarrollado con 💛 por **DevHub** - Catamarca, Argentina! 🇦🇷