import "../sass/main.scss";
import Game from "./class/game.js";
import Box from "./class/box.js";

let data = Game.getRowsCols();

let game = new Game(data.rows, data.cols, "game");
let resetButton= document.getElementById("reset");
resetButton.addEventListener("click", () => {
    Game.resetGame();
});