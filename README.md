# Plantilla React + Vite + Tailwind CSS + DaisyUI + React Router DOM

Esta plantilla lista para usar te permite iniciar nuevos proyectos rápidamente con:

- ✅ React 18
- ⚡ Vite (como bundler rápido)
- 🎨 Tailwind CSS
- 🌼 DaisyUI (complemento de componentes UI para Tailwind)
- 🚦 React Router DOM (para navegación)
  
---

## 🔧 Archivos configurados

Estos son los archivos principales que ya están configurados y listos para funcionar:

- `vite.config.js`: configuración de Vite + plugin de React
- `tailwind.config.js`: configuración de Tailwind CSS y DaisyUI
- `postcss.config.js`: configuración de PostCSS (necesario para Tailwind)
- `src/App.jsx`: archivo raíz con configuración de rutas (`react-router-dom`)
- `src/components/Header.jsx`: componente Navbar usando DaisyUI
- `src/pages/`: contiene páginas de ejemplo (`Home`, `About`, `Contact`)
- `index.html` y `main.jsx`: puntos de entrada al proyecto

---

## 📦 Versiones utilizadas

```bash
# Puedes verificar las versiones ejecutando:
npm list vite react react-dom tailwindcss daisyui react-router-dom

# Resultado aproximado:
vite: ^5.x.x
react: ^18.x.x
react-dom: ^18.x.x
tailwindcss: ^3.x.x
daisyui: ^3.x.x
react-router-dom: ^6.x.x

## Instrucciones

```bash
npm install
npm run dev


## 🚀 ¿Cómo reutilizar esta plantilla para otros proyectos?

```Cambia el nombre del directorio:
mv react-vite-tailwind-daisyui-template mi-nuevo-proyecto

```Abre el archivo package.json y cambia:

  "name": "mi-nuevo-proyecto",
  ...
