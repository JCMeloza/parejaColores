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

    set element(element){
        this.#element = element;
    }
}

export default Box;