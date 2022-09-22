const nome = 'Davi';

function falaNome() { // LEXICO DA FUNÇAO VAI PEGAR O QUe ESTA DENTRO DELA E O QUE ESTA EN VOLTA DELA , VIZINHOS DELA 
    console.log (nome)
};


function usarFalaNome() {
    const nome = 'jonas';   // NESTA SITUAÇAÕ ela nao esta nem ai com o que esta dentro dela ela vai pegar onde ela foi declarada 
    falaNome();
}
usarFalaNome();