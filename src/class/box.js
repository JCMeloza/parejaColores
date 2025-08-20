class Box {
	#col;
	#row;
	#color;
	#free;
	#open;
	#element;

	constructor(row, col, color) {
		this.#col = col;
		this.#row = row;
		this.#color = color;
		this.#free = true;
		this.#open = false;
		console.log("se ha creado un objeto tipo Box");
	}

	get col() {
		return this.#col;
	}
	get row() {
		return this.#row;
	}
	get color() {
		return this.#color;
	}

	set element(element) {
		this.#element = element;
	}
	get open() {
		return this.#open;
	}
	get free() {
		return this.#free;
	}
	get color() {
		return this.#color;
	}
	set free(newValue) {
		this.#free = newValue;
	}

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

    resetColor(){
        this.#element.style.backgroundColor = "black";
        this.#open = false;
    }
}

export default Box;
