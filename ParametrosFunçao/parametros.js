// function funçao(a ,b , c) {

//     let total = 0;
//     for (let argumento of arguments){
        
//         total += argumento;
//     }
//     console.log(total , a, b ,c)
// }

// funçao(1,2,3,4,6,7,8,9,10);

//##########################################################

// const conta  = function (operaçao , acumulador , ...numeros) { //os ... vai ser o resto das coisas (sempre o ultimo pq é o resto logioco)
//     for (let numero of numeros) {

//         if (operaçao === '+') acumulador += numero
//         if (operaçao === '-') acumulador -= numero
//         if (operaçao === '/') acumulador /= numero
//         if (operaçao === '*') acumulador *= numero
//     }
//     console.log (acumulador);

// };
// conta( '+', 1 , 1 ,10,20,30,40,50); // + 1 + 1+ 10 +20 +30 +40 +50
    
 

const consta = (...resto) => {
    console.log (resto)
}
consta('+' , 1, 2, 3, 4, 5);