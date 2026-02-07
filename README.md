# 🚀 DevHub - Soluciones Digitales v2.0

Landing page profesional para DevHub desarrollada con **Astro** + **Tailwind CSS** + **SEO Optimizado**.

## ✨ Nuevas Funcionalidades v2.0

### 🎨 Diseño Solo Modo Oscuro
- Interfaz completamente en modo oscuro para mejor experiencia visual
- Eliminado el toggle de tema claro/oscuro
- Colores optimizados para modo nocturno

### 👁️ Contador de Visitas Global
- Contador de visitas integrado en el Hero
- Utiliza CountAPI para tracking global real
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

### 🚀 Sección de Proyectos
- Muestra 3 proyectos destacados (JMR E-commerce, JMR Stock, DevHub CTA)
- Links directos a demos en vivo
- NO muestra repositorios (protección del código)
- Cards con categorías y tecnologías usadas

### 👥 Equipo Completo
- **Gonzalo Romero** - Full Stack Developer
- **Gustavo Cativa** - Full Stack Developer  
- **Tania Quiroga** - Frontend Developer & QA Tester
- Iconos de LinkedIn e Instagram para cada miembro
- Grid de 3 columnas responsive

### 🔍 SEO Optimizado (NUEVO)
- Meta tags Open Graph para Facebook, LinkedIn, WhatsApp
- Twitter Cards para compartir en Twitter/X
- Schema.org markup para Google Rich Results
- Sitemap automático
- robots.txt optimizado
- Keywords estratégicas
- Descripción optimizada para conversión

## 📁 Estructura del Proyecto

```
devhub/
├── src/
│   ├── components/          
│   │   ├── Header.astro     # Navegación con 7 secciones
│   │   ├── Footer.astro     # Modo oscuro permanente
│   │   ├── Hero.astro       # Con contador de visitas integrado
│   │   ├── ServiceCard.astro
│   │   ├── FeatureCard.astro
│   │   └── TeamMember.astro # Con redes sociales
│   ├── layouts/
│   │   └── Layout.astro     # SEO completo + Open Graph
│   ├── pages/
│   │   └── index.astro      # Página principal completa
│   └── assets/              
├── public/
│   ├── favicon.svg
│   ├── logo.png             # Logo principal (IMPORTANTE)
│   ├── og-image.png         # Imagen Open Graph 1200x630px (CREAR)
│   └── robots.txt           # SEO crawler config
├── package.json
├── tailwind.config.mjs      
└── astro.config.mjs         # Con sitemap habilitado
```

## 🖼️ Configurar Imagen Open Graph (Muy Importante)

Para que tu logo aparezca cuando compartas el link, necesitas crear una imagen Open Graph:

### Opción 1: Crear manualmente
1. Diseña una imagen de **1200x630 píxeles**
2. Incluye tu logo DevHub
3. Agrega texto: "DevHub - Soluciones Digitales"
4. Opcional: agregar "Catamarca, Argentina"
5. Guárdala como `public/og-image.png`

### Opción 2: Herramientas online
Usa estas herramientas para crear la imagen:
- [Canva](https://www.canva.com/) - Template "Facebook Post"
- [Figma](https://www.figma.com/) - Crear artboard 1200x630px
- [OG Image Generator](https://og-image.vercel.app/)

### Opción 3: Usar el logo directamente
Si tu `logo.png` es de buena calidad:
1. Redimensiona a 1200x630px
2. Centra el logo en un fondo oscuro (#1a1a1a)
3. Guárdalo como `public/og-image.png`

**Luego actualiza en `Layout.astro`:**
```astro
const { 
  // ...
  image = '/og-image.png',  // Cambiar de /logo.png a /og-image.png
  // ...
} = Astro.props;
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

Esto instalará:
- Astro 5.1.3
- Tailwind CSS 3.4.1
- @astrojs/sitemap (para SEO)

### 2. Iniciar servidor de desarrollo

```bash
npm run dev
```

Tu sitio estará disponible en: **http://localhost:4321**

### 3. Build para producción

```bash
npm run build
```

Esto generará:
- Sitio optimizado en `/dist`
- Sitemap en `/dist/sitemap-index.xml`
- HTML comprimido
- CSS minificado

## 🔍 Checklist de SEO

### ✅ Implementado
- [x] Meta description optimizada
- [x] Title tags descriptivos
- [x] Open Graph tags (Facebook, WhatsApp, LinkedIn)
- [x] Twitter Cards
- [x] Schema.org Organization markup
- [x] Canonical URLs
- [x] Sitemap.xml automático
- [x] robots.txt
- [x] Keywords relevantes
- [x] Favicons múltiples tamaños
- [x] HTML lang="es"
- [x] Compresión HTML
- [x] Preload de assets críticos

### 📝 Por hacer manualmente
- [ ] Crear imagen Open Graph (1200x630px)
- [ ] Crear favicon-32x32.png
- [ ] Crear favicon-16x16.png
- [ ] Crear apple-touch-icon.png (180x180px)
- [ ] Registrar en Google Search Console
- [ ] Registrar en Bing Webmaster Tools
- [ ] Crear cuenta Google Analytics (opcional)
- [ ] Verificar con [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Verificar con [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🌐 Deploy con SEO

### Netlify (Recomendado)

1. **Push a GitHub**:
```bash
git init
git add .
git commit -m "DevHub v2.0 - SEO completo"
git branch -M main
git remote add origin https://github.com/tu-usuario/devhub.git
git push -u origin main
```

2. **Configurar Netlify**:
   - Ir a https://app.netlify.com/
   - "Add new site" → "Import an existing project"
   - Seleccionar tu repositorio
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - **IMPORTANTE:** Configurar dominio personalizado `devhub.com.ar`
   - Habilitar HTTPS automático

3. **Verificar SEO**:
   - Acceder a `https://devhub.com.ar/sitemap-index.xml`
   - Acceder a `https://devhub.com.ar/robots.txt`
   - Compartir link en WhatsApp/Facebook y verificar preview

### Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📊 Herramientas de Verificación SEO

Después del deploy, verifica tu sitio con:

1. **Google Search Console**
   - Agrega tu sitio
   - Sube el sitemap: `https://devhub.com.ar/sitemap-index.xml`

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Verifica que se vea el logo y descripción

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Verifica el preview

4. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Objetivo: 90+ en Performance

5. **Lighthouse (Chrome DevTools)**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

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
- **advantages**: Ventajas vs plantillas
- **projects**: Proyectos destacados (NUEVO)
- **team**: Miembros del equipo (3 personas)

### Actualizar URLs de redes sociales

En `src/pages/index.astro`, buscar el array `team` y actualizar:
```javascript
{
  // ...
  linkedinUrl: 'https://www.linkedin.com/in/tu-usuario/',
  instagramUrl: 'https://www.instagram.com/tu-usuario'
}
```

### Configurar Email de Contacto

En `src/pages/index.astro`, buscar:
```javascript
const mailtoLink = `mailto:contacto@devhub.com.ar?subject=...`;
```

### Configurar WhatsApp

Buscar y actualizar:
```html
<a href="https://wa.me/5493834946767">
```

## 📱 Secciones de la Página

1. **Hero** - Logo, título, contador de visitas, CTAs
2. **Servicios** - 4 servicios con precios
3. **Por qué DevHub** - 6 razones
4. **Ventajas** - 9 comparaciones vs plantillas
5. **Tecnologías** - Stack con iconos
6. **Proyectos** - 3 proyectos con demos (NUEVO)
7. **Nosotros** - Equipo de 3 personas con redes sociales
8. **Contacto** - Formulario + datos de contacto

## 🎯 Características Destacadas

✅ **SEO 100%** - Meta tags completos, sitemap, Schema.org  
✅ **Open Graph** - Preview perfecto en redes sociales  
✅ **Modo oscuro permanente** - Diseño profesional nocturno  
✅ **Contador de visitas global** - Tracking real en tiempo real  
✅ **Formulario de contacto funcional** - Envío directo a email  
✅ **9 ventajas vs plantillas** - Sección comparativa única  
✅ **Iconos en tecnologías** - Mejor experiencia visual  
✅ **Sección de proyectos** - Portfolio con demos en vivo  
✅ **Equipo completo** - 3 miembros con redes sociales  
✅ **100% responsive** - Mobile, tablet, desktop  
✅ **Performance optimizado** - Carga ultra rápida  
✅ **Animaciones suaves** - Scroll reveals y transitions  

## 🔧 Tecnologías Utilizadas

- **Astro 5.1** - Framework principal (SSG)
- **Tailwind CSS 3.4** - Estilos utility-first
- **Font Awesome 6.5** - Iconos profesionales
- **CountAPI** - Contador de visitas (gratis)
- **TypeScript** - Type safety (opcional)
- **@astrojs/sitemap** - Generación automática de sitemap

## 💡 Tips Importantes

1. **Logo**: Colocar `logo.png` en carpeta `/public/`
2. **OG Image**: Crear `og-image.png` (1200x630px) en `/public/`
3. **Favicons**: Generar en https://favicon.io/
4. **Google Analytics**: Agregar en `Layout.astro` si lo necesitas
5. **Contador persistente**: Migrar a Supabase en producción
6. **Verificar SEO**: Usar herramientas después del deploy

## 📍 Contacto DevHub

- 📧 **Email**: contacto@devhub.com.ar
- 📱 **WhatsApp**: +54 9 383 4946767
- 🌐 **Ubicación**: Catamarca Capital, Argentina
- 💼 **LinkedIn Team**: 
  - [Gonzalo Romero](https://www.linkedin.com/in/gonzaloromero-/)
  - [Gustavo Cativa](https://www.linkedin.com/in/gustavo-cativa-a50363213/)
  - [Tania Quiroga](https://www.linkedin.com/in/taniaquiroga/)

## 🆕 Changelog v2.0

### Agregado
- ✨ Contador de visitas global en Hero
- 📝 Formulario de contacto funcional
- 🏆 Sección "9 Ventajas vs Plantillas"
- 🎨 Iconos en todas las tecnologías
- 🌙 Modo oscuro como único tema
- 🚀 Sección de Proyectos con 3 demos
- 👥 Tania Quiroga agregada al equipo (3 miembros total)
- 🔗 Iconos de LinkedIn e Instagram para cada miembro
- 🔍 SEO completo con Open Graph y Twitter Cards
- 📄 Schema.org markup para Google
- 🗺️ Sitemap automático
- 🤖 robots.txt optimizado

### Modificado
- 🎨 Header con 7 secciones (agregado Proyectos)
- 🎨 Footer adaptado a modo oscuro
- 📱 Navegación actualizada
- 👥 Grid del equipo: 2 → 3 columnas
- 🎨 TeamMember con redes sociales

### Eliminado
- ❌ Toggle de modo claro/oscuro
- ❌ Componente VisitorCounter separado (integrado en Hero)
- ❌ Estilos de modo claro
- ❌ Links a repositorios de GitHub (protección de código)

---

🚀 **DevHub v2.0** - Desarrollo Web con SEO profesional desde Catamarca, Argentina 🇦🇷

💛 Desarrollado por el equipo DevHub