falarOi();
function falarOi() {
    console.log('oie');
};
//////////////////////////////////////////////////////
const souUmDado = function () {
    console.log('falar oi')
}
souUmDado();

function executaFuncao(funçao) {
    console.log('vou executar sua função abaixo')
    funçao();

}
executaFuncao(souUmDado);
/////////////////////////////////////////////////////////////
const funçaoarrow = () => {
    console.log('diga-me Oi');
};
funçaoarrow();

///////////////////////////////////////////////////////////////
const obj = {
    falar: function () {
        console.log('estou falando ')
    },

    dançar: function () {
        console.log('dançando')
    }
};
obj.falar();

