// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// let campo = document.querySelector(tag)
// campo.innerHTML = texto

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});     Caso não funcione, devemos usar o código de baixo (Web Speech API)
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();

    // alert('Eu amo JS');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista === numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}



// function verificarChute(){
//     var cidade = prompt('Informe um nome de uma cidade: ');
//     alert(`Estive em ${cidade} e lembrei de você`)
// }

// function verificarChute(){
//     var numero1 = prompt("Informe um número: ");
//     var numero2 = prompt("Informe um outro número: ");
//     var soma = Number(numero1) + Number(numero2);
//     alert(`O resultado da soma é ${soma}`);
// }

// function olaMundo(){
//     alert('Olá, mundo!');
// }

// function olaName(name){
//     alert(`Olá, ${name}!`)
// }

// function doubleNumber(number){
//     return(number*2);
// }

// function threeNumbers(number1, number2, number3){
//     return((number1 + number2, number3)/3);
// }

// function greaterNumber(number1, number2){
//     if(number1 > number2){
//         return number1;
//     }
//     if(number2 > number1){
//         return number2;
//     }else if(number1 == number2){
//         return 'The numbers are equal!'
//     }
// }

// function multiplyingNumber(number){
//     return number*number;
// }

// function IMC(altura, peso){
//     return peso / (altura * altura);
// }

// function fatorial(number){
//     let fatorial = 1
//     while(number > 0){
//         fatorial = fatorial * number;
//         number--;
//     }
//     return fatorial;
// }

// function conversionDolarToReal(dolar){
//     return dolar * 4,80;
// }

// function areaAndPerimeterRectangular(largura, altura){
//     let perimeter = (largura*2) + (altura*2);
//     let area = largura * altura;

//     alert(`O perímetro é ${perimeter} e a área é ${area}.`);
// }

// function areaAndPerimeterCircle(radius){
//     let perimeter = 2 * (3,14) * radius;
//     let area = (3,14) * (radius**2);

//     alert(`O perímetro é ${perimeter} e a área é ${area}`);
// }

// function tabuada(number){
//     while(number >= 0){
//         let base = 0;
//         let result = number * base;
//         alert(`${number} x ${base} = ${result}`);
//     }
// }

// var listaGenerica = [];
// var linguagensDeProgramação = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// linguagensDeProgramação.push('Java', 'Ruby', 'GoLang');

// var nomes = ['M', 'C', 'A'];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);