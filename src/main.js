import '../sass/main.scss'
import Game from './class/game.js';
import Box from './class/box.js';

let rows = parseInt(prompt("Ingrese el número de filas del tablero:"))
;
let cols = parseInt(prompt("Ingrese el número de columnas del tablero:"));

let game = new Game(rows, cols, 'game');
let box = new Box();