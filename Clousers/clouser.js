function retornaFunçao(nome){
   return function() {
    return nome;
   } 
}


const funçao = retornaFunçao('DAVI'); //o cluser pode ser mudado
const funçao2 = retornaFunçao('LUIS');

console.log (funçao() , funçao2()); //sempre que for funçao = luiz , funçao2 = davi
