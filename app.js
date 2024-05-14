let listaDeNumerosSorteados = [];
let numeroMaximo = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
 
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'bao em fera');
        exibirTextoNaTela('p', 'acerto miseravi, em ' + tentativas + ' ' + palavraTentiva);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'chuto baixo nengue');
        } else {
            exibirTextoNaTela('h1', 'chuto muito alto');
        }
        tentativas++;
        limparCampo();
    }
    //console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroMaximo);
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}