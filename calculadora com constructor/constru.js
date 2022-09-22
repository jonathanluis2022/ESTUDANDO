function Calculadora() {

    this.display = document.querySelector('.display'); // para chamar o input do display 

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => { //si foi a tecla ENTER que precionei o enter e soltei , realiza a conta 
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })

    };
    // eventos para capturar cliques 
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; // saber onde estou clicando 
            // si onde eu clicar tiver o elemento btn-num , vai aparecer o innertext de onde eu clicar 
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); //jogamos em uma variavel para tratar se der erro

            if (!conta) {
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('conta invalida');
            return;
        }
    }

    this.addNumDisplay = el => this.display.value += el.innerText; // clicando no num vai aparecer o texto interno do btn-num
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();