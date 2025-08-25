# Juego Pareja de Colores

Proyecto desarrollado por **JCMeloza**

Repositorio: [https://github.com/JCMeloza/parejaColores](https://github.com/JCMeloza/parejaColores)

## Descripción

Este proyecto es un juego de memoria tipo "parejas" donde el objetivo es encontrar todas las parejas de colores en un tablero. El tablero es configurable en filas y columnas, y cada partida genera colores aleatorios para las cajas. El juego está desarrollado en JavaScript moderno, utilizando Vite como entorno de desarrollo y SASS para los estilos.

## Características
- Tablero configurable en filas y columnas.
- Colores generados aleatoriamente en cada partida.
- Lógica de emparejamiento de cajas por color.
- Reinicio de partida y persistencia de configuración mediante localStorage.
- Código modular y comentado.

## Tecnologías y herramientas utilizadas
- **JavaScript (ES6+)**
- **Vite** (entorno de desarrollo y bundler)
- **SASS** (preprocesador CSS)
- **HTML5**
- **LocalStorage** (persistencia de configuración)

## Estructura del proyecto

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
├── sass/
│   ├── main.scss
│   └── components/
│       └── game.scss
├── src/
│   ├── main.js
│   ├── class/
│   │   ├── box.js
│   │   └── game.js
│   └── utils/
│       └── utils.js
```

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/JCMeloza/parejaColores.git
   cd parejaColores
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. Abre tu navegador en la URL que te indique la terminal (por defecto suele ser [http://localhost:5173](http://localhost:5173)).

## Uso

- Al iniciar el juego, se solicitará el número de filas y columnas para el tablero.
- Haz clic en las cajas para descubrir su color e intenta encontrar las parejas.
- Puedes reiniciar la partida con el botón de "Reset".

## Personalización

- Puedes modificar los estilos en la carpeta `sass/`.
- La lógica del juego se encuentra en `src/class/game.js` y `src/class/box.js`.

## Créditos

Creado por **JCMeloza**

---

¡Disfruta jugando y mejorando tu memoria visual!
