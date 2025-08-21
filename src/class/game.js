import { shuffleArray } from "../utils/utils";
import Box from "./box";

class Game {
	#rows;
	#cols;
	#idElement;
	#boxes;
	element;
	/**
	 * Constructor de la clase Game. Inicializa el tablero de juego.
	 * @param {number} rows - Número de filas del tablero.
	 * @param {number} cols - Número de columnas del tablero.
	 * @param {string} idElement - ID del elemento HTML donde se renderizará el juego.
	 */
	constructor(rows, cols, idElement = "game") {
		this.#rows = rows;
		this.#cols = cols;
		this.#idElement = idElement;
		this.element = document.getElementById(this.#idElement);
		this.#boxes = [];
		this.createBoxes();
		this.paintBoxes();

		this.element.addEventListener("click", () => {
			this.checkOpenBoxes();
		});

		console.log("se ha creado un objeto tipo Game");
	}
	/**
	 * Devuelve el número de filas.
	 * @returns {number}
	 */
	get rows() {
		return this.#rows;
	}
	/**
	 * Devuelve el número de columnas.
	 * @returns {number}
	 */
	get cols() {
		return this.#cols;
	}

	/**
	 * Crea un array de colores aleatorios duplicados y barajados.
	 * @returns {string[]} - Array de colores.
	 */
	createRandomColors() {
		let randomColors = [];
		for (let index = 0; index < (this.#cols * this.#rows) / 2; index++) {
			let red = Math.floor(Math.random() * 256);
			let green = Math.floor(Math.random() * 256);
			let blue = Math.floor(Math.random() * 256);
			let color = `rgb(${red}, ${green}, ${blue})`;
			randomColors.push(color);
		}

		randomColors = [...randomColors, ...randomColors];
		shuffleArray(randomColors);
		return randomColors;
	}

	/**
	 * Crea las instancias de las cajas (Box) para el juego.
	 */
	createBoxes() {
		let randomColors = this.createRandomColors();
		for (let row = 0; row < this.#rows; row++) {
			for (let col = 0; col < this.#cols; col++) {
				let color = randomColors.shift();
				let newBox = new Box(row, col, color);
				this.#boxes.push(newBox);
			}
		}
	}

	/**
	 * Pinta las cajas en el DOM y les añade los eventos.
	 */
	paintBoxes() {
		this.setCSSBoxTemplates();
		this.#boxes.map((box) => {
			let newBoxDiv = document.createElement("div");
			newBoxDiv.classList.add("box");
			newBoxDiv.dataset.col = box.col;
			newBoxDiv.dataset.row = box.row;
			box.element = newBoxDiv;
			box.addEventClick();
			this.element.appendChild(newBoxDiv);
		});
	}

	/**
	 * Establece las plantillas de CSS para el tablero de juego.
	 */
	setCSSBoxTemplates() {
		this.element.style.gridTemplateColumns = `repeat(${this.#cols}, 1fr)`;
		this.element.style.gridTemplateRows = `repeat(${this.#rows}, 1fr)`;
	}

	/**
	 * Comprueba las cajas que están abiertas y si coinciden.
	 */
	checkOpenBoxes() {
		//comprobamos si hay dos cajas abiertas
		let nOpenBoxes = this.#boxes.filter((box) => box.open && box.free);
		if (nOpenBoxes.length === 2) {
			if (nOpenBoxes[0].color === nOpenBoxes[1].color) {
				nOpenBoxes.map((box) => {
					box.free = false;
				});
			} else {
				setTimeout(() => {
					nOpenBoxes.map((box) => {
						box.resetColor();
					});
				}, 500);
			}
		}
	}

	/**
	 * Obtiene el número de filas y columnas desde el localStorage o preguntando al usuario.
	 * @returns {{rows: number, cols: number}} - Objeto con el número de filas y columnas.
	 */
	static getRowsCols() {
		let rows, cols;
		if (localStorage.getItem("rows") !== null && localStorage.getItem("cols") !== null) {
			rows = parseInt(localStorage.getItem("rows"));
			cols = parseInt(localStorage.getItem("cols"));
		} else {
			rows = parseInt(prompt("Ingrese el número de filas del tablero:"));
			cols = parseInt(prompt("Ingrese el número de columnas del tablero:"));
			if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
				alert("Por favor, ingrese números válidos para filas y columnas.");
				return this.getRowsCols();
			}
			localStorage.setItem("rows", rows);
			localStorage.setItem("cols", cols);
		}

		return { rows, cols };
	}

	/**
	 * Reinicia el juego eliminando los datos del localStorage y recargando la página.
	 */
	static resetGame(){
		localStorage.removeItem("rows");
		localStorage.removeItem("cols");
		location.reload();
	}
}

export default Game;
