/**
 * Clase que representa una caja en un tablero.
 */

class Box {
	#col;
	#row;
	#color;
	#free;
	#open;
	#element;

	/**
	 * Constructor de la clase Box.
	 * @param {number} row - Fila de la caja.
	 * @param {number} col - Columna de la caja.
	 * @param {string} color - Color de la caja.
	 */
	constructor(row, col, color) {
		this.#col = col;
		this.#row = row;
		this.#color = color;
		this.#free = true;
		this.#open = false;
		console.log("se ha creado un objeto tipo Box");
	}

	/**
	 * Devuelve la columna de la caja.
	 * @returns {number}
	 */
	get col() {
		return this.#col;
	}
	/**
	 * Devuelve la fila de la caja.
	 * @returns {number}
	 */
	get row() {
		return this.#row;
	}
	/**
	 * Devuelve el color de la caja.
	 * @returns {string}
	 */
	get color() {
		return this.#color;
	}

	/**
	 * Establece el elemento DOM de la caja.
	 * @param {HTMLElement} element - El elemento del DOM.
	 */
	set element(element) {
		this.#element = element;
	}
	/**
	 * Devuelve si la caja está abierta.
	 * @returns {boolean}
	 */
	get open() {
		return this.#open;
	}
	/**
	 * Devuelve si la caja está libre.
	 * @returns {boolean}
	 */
	get free() {
		return this.#free;
	}
	/**
	 * Devuelve el color de la caja.
	 * @returns {string}
	 */
	get color() {
		return this.#color;
	}
	/**
	 * Establece el estado libre de la caja.
	 * @param {boolean} newValue - El nuevo valor para free.
	 */
	set free(newValue) {
		this.#free = newValue;
	}

	/**
	 * Añade el evento de click a la caja para mostrar su color.
	 */
	addEventClick() {
		if (this.#element) {
			this.#element.addEventListener("click", (e) => {
				if (!this.#open) {
					this.#element.style.backgroundColor = this.#color;
					this.#open = true;
				}
                return false;
			});
		}
	}

    /**
     * Resetea el color de la caja a negro y la marca como no abierta.
     */
    resetColor(){
        this.#element.style.backgroundColor = "black";
        this.#open = false;
    }
}

export default Box;
