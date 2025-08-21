// Importa los estilos SASS principales y la clase Game.
import "../sass/main.scss";
import Game from "./class/game.js";

// Obtiene los datos de filas y columnas para el juego.
let data = Game.getRowsCols();

// Crea una nueva instancia del juego con los datos obtenidos.
let game = new Game(data.rows, data.cols, "game");
// Obtiene el botón de reinicio del DOM.
let resetButton= document.getElementById("reset");
// Añade un evento de click al botón de reinicio para llamar a la función de reseteo del juego.
resetButton.addEventListener("click", () => {
    Game.resetGame();
});