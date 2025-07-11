[![Next.js](https://img.shields.io/badge/Next.js-15%2B-blue?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

# Wordle clone

![](https://cdn-images-1.medium.com/max/1600/1*g6yehfUoGnjog0GDn9t5xA.gif)

Puedes ver una versión desplegada del proyecto en el siguiente enlace:

- [Demo](https://wordle-clone-chi-sandy.vercel.app/)

Y si deseas consultar esta misma guía paso a paso como parte del sitio, está incluida directamente dentro de la documentación:

- **Pendiente**

# Cómo descargar e instalar el proyecto

Si quieres utilizar esta base de documentación en tu propio entorno o como punto de partida para tu proyecto, puedes seguir estos pasos:

### Clona el repositorio

```bash
git clone https://github.com/mauriciogc/wordle-clone.git
cd wordle-clone
```

### Instala las dependencias

Asegúrate de tener Node.js 18 o superior instalado. Luego ejecuta:

```bash
npm install
```

### Inicia el servidor en modo desarrollo

```bash
npm run dev
```

Esto iniciará el servidor local en `http://localhost:3000`. Ya podrás navegar la documentación, probar el layout, ver el input de búsqueda (en modo limitado) y empezar a modificar el contenido en `/src/content`.

---

### (Opcional) Generar el índice de búsqueda para producción

Para compilar el sitio y generar el índice de búsqueda completo con Pagefind:

```bash
npm run build
npm run start
```

Esto ejecuta el postbuild definido en el package.json, que genera el índice de búsqueda en `public/_pagefind`.

---
