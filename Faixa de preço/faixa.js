let faixaPreço = [
    { tooltip: 'ate 700', minimo: 0, maximo: 700 },
    { tooltip: 'de 700 ha 1000', minimo: 700, maximo: 1000 },
    { tooltip: 'de 1000 ha 999999', minimo: 1000, maximo: 999999 }
];
console.log(faixaPreço);

//  factory function  ************************************//

function faixaDePreço(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    faixaDePreço('a', '1', '100'),
    faixaDePreço('b', '2', '200'),
    faixaDePreço('c', '3', '300')
];
console.log(faixas2);

//************************************constructor function */

function faixadePreços(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}
let faixa3 = [
    new faixadePreços('d', '4', 400),
    new faixadePreços('e', '5', 500),
    new faixadePreços('f', '6', 600)
];

console.log(faixa3);


