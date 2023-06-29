    function calcularMedia(notas) {
        let soma = 0;

        //Adicionado let ao declarar a variável c para evitar que c seja uma variável global
        for (let c = 0; c < notas.length; c++) {
            soma += notas[c];
        }
        return soma / notas.length;
    }
    
    //Evitado o uso da variável media no escopo global
    function aprovacao(notas) {

        //Adicionado let na variável media para garantir que a variável seja local à função
        let media = calcularMedia(notas);
        let condicao = media >= 8 ? "aprovado" : "reprovado";
        return 'Média: ' + media + ' - Resultado: ' + condicao;
    }
    
    function contagemRegressiva(numero) {
        console.log(numero);
        let proximoNumero = numero - 1;
        if (proximoNumero > 0)
            contagemRegressiva(proximoNumero);
    }
    
    const formulario1 = document.getElementById('formulario-01');
    
    if (formulario1) {
        formulario1.addEventListener('submit', function (evento) {
            evento.preventDefault();
            evento.stopPropagation();
    
            if (this.classList.contains('erro')) {
                return false;
            }
    
            let dados = new FormData(this);
            let notas = [];
    
            for (let key of dados.keys()) {
                let numero = Number(dados.get(key)) || 0;
    
                if (!isNaN(numero)) {
                    notas.push(numero);
                }
            }
    
            console.log(notas);
    
            let texto = aprovacao(notas);
            document.getElementById('resultado').innerHTML = texto;
        });
    }
    
    function validaCampo(elemento) {
        elemento.addEventListener('focusout', function (event) {
            event.preventDefault();

        if (this.value === "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaCampoNumerico(elemento) {
    elemento.addEventListener('focusout', function (event) {
        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if (numero !== "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaEmail(elemento) {
    elemento.addEventListener('focusout', function (event) {
        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposNumericos = document.querySelectorAll('input.numero');
const camposEmail = document.querySelectorAll('input.email');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}