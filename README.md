# Bardosoft - Portafolio de Proyectos

Página web simple y moderna para mostrar tus apps, webapps, scripts y plugins.

## Características

- ✨ Diseño moderno y limpio
- 📱 Completamente responsive
- 🎨 Tema oscuro elegante
- ⚡ Animaciones suaves
- 🔧 Fácil de personalizar

## Cómo usar

1. Abre `index.html` en tu navegador
2. Edita el archivo `index.html` para agregar tus proyectos
3. Personaliza los colores en `styles.css` si lo deseas

## Agregar un nuevo proyecto

Simplemente copia una de las cards de ejemplo y modifica:

```html
<div class="project-card">
    <div class="project-icon">📱</div>
    <h3>Nombre de tu Proyecto</h3>
    <p>Descripción de tu proyecto.</p>
    <div class="project-tags">
        <span class="tag">Tecnología 1</span>
        <span class="tag">Tecnología 2</span>
    </div>
    <div class="project-links">
        <a href="URL_DEL_PROYECTO" class="btn btn-primary">Ver Proyecto</a>
        <a href="URL_DEL_GITHUB" class="btn btn-secondary">GitHub</a>
    </div>
</div>
```

## Personalización

### Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --background: #0f172a;
    /* ... más colores */
}
```

### Iconos

Puedes cambiar los emojis por iconos de Font Awesome, Material Icons, o cualquier otra librería de iconos.

## Despliegue en Vercel

Este proyecto está configurado para desplegarse fácilmente en Vercel.

### Pasos para desplegar:

1. **Sube el proyecto a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin master
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración y desplegará el proyecto

3. **¡Listo!** Tu sitio estará disponible en una URL de Vercel

El archivo `vercel.json` ya está configurado para servir los archivos estáticos correctamente.

## Proyectos incluidos

- **Horarios**: Sistema de administración de horarios
- **Quizlo**: Aplicación interactiva de preguntas y respuestas
- **Mundial 2026**: Fixture interactivo del Mundial 2026
- **TrueDup**: Herramienta para encontrar archivos duplicados
- **Facturación**: Sistema de gestión de facturas y facturación electrónica

## Licencia

Libre para usar y modificar.



