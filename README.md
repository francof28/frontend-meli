# MeLi App

Este proyecto es una mini versión de Mercado Libre, una aplicación web que permite a los usuarios buscar, comprar y vender productos. Consta de los siguientes componentes:

- Caja de búsqueda: Permite a los usuarios buscar productos por nombre, categoría o descripción.
- Visualización de resultados: Muestra una lista de productos que coinciden con la búsqueda del usuario.
- Descripción del detalle del producto: Muestra información detallada sobre un producto específico, como imágenes, precio, descripción y características.

## Stack tecnológico

- Frontend: React.js, TypeScript, Vite.js.
- Backend: Node.js, Express.
- Librerías: Sass, axios, react-query.


## Instrucciones de arranque

Para arrancar el proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias con el comando `npm install`.
[IMPORTANTE] -> También debes instalar las dependencias de las carpetas 'client' y 'server' por separado corriendo el comando `npm install` en cada una de ellas.
4. Arranca el servidor de desarrollo con el comando `npm run start` desde la carpeta raíz -> `frontend-meli`.
5. Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en acción!

## Roadmap de próximas funcionalidades

Estas son algunas de las funcionalidades que planeamos implementar en futuras versiones del proyecto:

- Agregar TypeScript al servidor de Express para mejorar la seguridad y el mantenimiento del código.
- Añadir más tipados para el cliente para una mejor robustez y escalabilidad.
- Implementar el atomizado de componentes con styled-components para un desarrollo más modular y reutilizable.
- Desarrollar un theme y design system para mantener una apariencia consistente en toda la aplicación.
- Expandir el número de pantallas y secciones para ofrecer una experiencia más completa a los usuarios.