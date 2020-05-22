export class Button {
    #node;
    #amount = 0;

    constructor(name) {
        this.name = name;
    }

    render() {
        this.#node = document.createElement('button');
        this.#node.classList.add('test-class');
        this.#node.innerText = this.name;
        this.#node.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick() {
        this.#amount++;
        console.log(`clicked ${this.#amount} times`);
    }

    get node() {
        if(!this.#node) this.render();
        return this.#node;
    }
}