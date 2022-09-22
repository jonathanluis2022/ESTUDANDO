function criaPessoa (nome , sobrenome , a , p) {
    return{
        nome,
        sobrenome,
        
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; //this se refere a p1
            //this vai ser sempre quem chamar
        },

        set nomeCompleto(valor) { //valor vai ser luiz otavio pq ele é uma metodo e esta soo fingindo ser um atribulto
            valor = valor.split(' '); //vai dividir o valor nos espaço e vai retornanr um array .
            this.nome = valor.shift(); //vai remover o primeiro nome do valor
            this.sobrenome = valor.join(' ');
        
        },

        fala(assunto = 'esta acima do peso') {
            return `${this.nome} esta ${assunto}`;
        },

        altura: a,
        peso: p,

       get imc() { //get faz ele fingir ser um atribulto  , chama Geter na programaçao 
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    }
}
const p1 = criaPessoa ('luiz' , 'Otavio' , 1.8 , 80);
const p2 = criaPessoa ('davi' , 'Luis'  ,  1.5 , 90);
const p3 = criaPessoa ('Drycka' , 'Santos' , 1.77 , 100);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
console.log (p3.fala());
