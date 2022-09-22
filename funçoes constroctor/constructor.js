//********************************************************************** */
//funçoes constructor

function Jogador(habilit, posçao, titulo) {

    this.habilit = habilit,
    this.posçao = posçao,
    this.titulo = titulo
}
const atleta = new Jogador ('jonthan' , 'atacante' , 14);
const atleta1=new Jogador ('davi', 'Luis', 50)
console.log (atleta);
console.log (atleta1);



//********************************************************************** */
//funções Fabrica

function pessoas (nome , sobrenome , peso) {
    return {
        nome,
        sobrenome,
        peso,
    }   
}
const gente = pessoas ('jonas' , 'luis', '1000');
const gente1= pessoas ('drycka', 'rodrigues', '80kg')

console.log (gente);
console.log (gente1)
