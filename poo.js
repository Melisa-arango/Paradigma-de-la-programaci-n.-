class Pizza {
    constructor(masa, tamaño, ingredientes) {
        this.masa = masa;
        this.tamaño = tamaño;
        this.ingredientes = ingredientes;

    }
    preparar() {
        console.log(`Preparando una pizza de $.{this.tamaño} con masa {this.masa} y los siguientes ingredientes: ${this.ingredientes}.`);
        return this;

    };


    hornear() {
        console.log("La pizza esta en el horno...");
        return this;
    };

    empacar() {
        console.log("la pizza se esta empacando...");
        return this;

    };
}
const pizzaHawaiana = new Pizza("delgada", "mediana", ["jamon", "piña", "queso"]);

console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());


const piza = new Pizza("gruesa", "Pequeña", ["pepperoni", "queso"]);

console.log(piza.preparar()); + (piza.hornear()); +  (piza.empacar());


