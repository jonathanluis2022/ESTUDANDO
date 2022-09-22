
function frabricaDeCarros ( marcas, modelo, potencia, cor) {
    return{
        marcas,
        modelo,
        potencia,
        cor,
        velocidade() {
            console.log('100km/h em 5seg');
        }

    }

}

const carros1 = frabricaDeCarros ('BMW', 'X6', 4.0, 'BRANCA');
const carros2 = frabricaDeCarros ('AUDI', 'Q7', 3.2, 'VERMELHO')

console.log (carros1);
console.log (carros2);

