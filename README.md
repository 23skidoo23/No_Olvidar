# No Olvidar

Proyecto en React + Vite.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- Git

## Empezar

```bash
git clone <URL-del-repo>
cd No_Olvidar
npm install
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Scripts

| Comando           | Qué hace                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga    |
| `npm run build`   | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la build de `dist/`  |

## Estructura

```
src/
  components/   Componentes reutilizables
  App.jsx       Componente principal
  main.jsx      Punto de entrada
  index.css     Estilos globales
```

## Forma de trabajar

1. Actualiza `main`: `git pull`
2. Crea una rama: `git checkout -b nombre-de-la-tarea`
3. Haz commits pequeños y sube la rama: `git push -u origin nombre-de-la-tarea`
4. Abre un Pull Request en GitHub para revisarlo antes de unirlo a `main`.
