function criaCalculadora() {
    return {

        display: document.querySelector('.display'), //chamar o display 
        btnClear: document.querySelector('.btn-clear'),

        iniciar() {
            this.teclas(); //usamos o this pq estamos usando o mesmo metodo
            this.precionaEnter(); //para realizar a conta precionando ENTER 
        },

        teclas() {
            document.addEventListener('click', (e) => { //clicando em algum lugar 
                const el = e.target;

                if (el.classList.contains('btn-num')) { //clicando nos booes ira aparecer o innerText dos botoes 
                    this.btnInput(el.innerText); // 
                }

                if (el.classList.contains('btn-clear')) { //si foi a tecla btn-clear que precionei , pode apagar
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {// si foi essa tecla pode deletar 1 por 1
                    this.apagarUM();
                }

                if (el.classList.contains('btn-eq')) { //si foi essa tecla pode realizar a conta 
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = ''; //para apagar tudo
            this.display.focus();//cursor voltar no lugar onde cria conta 
        },

        apagarUM() {
            this.display.value = this.display.value.slice(0, -1);//tamanho -1
        },

        realizaConta() {
            let conta = this.display.value; //vai pegar o valor do display para fazer a conta 

            try {
                conta = eval(conta); //eval interpreta td que vc colocar la é js , muito cuidado para ela n interpretar outras coisas 
                if (!conta) { //si for diferente de conta vai dar o alert de error
                    alert('CONTA iNVALIDA');
                    return;
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('conta Invalida');
                return;
            }

        },

        precionaEnter() {
            this.display.addEventListener('keyup', e => { //si foi a tecla ENTER que precionei o enter e soltei , realiza a conta 
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        
        btnInput(valor) { //essa valor é o valor do innerText
            this.display.value += valor; //valor do display mais o botao

        }

    }
};

const calcule = criaCalculadora(); //chamar o metodo com variavel
calcule.iniciar(); //inicia

