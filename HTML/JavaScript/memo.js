// Função para gerar uma lista de números aleatórios
function listaAleatoria(N) {
    var lista = [];
    for (var i = 0; i < N; i++) {
        lista.push(Math.floor(Math.random() * 100) + 1); // Números entre 1 e 100
    }
    return lista;
}

// Função para exibir a lista para o jogador memorizar
function exibirLista(lista) {
    const listaDisplay = document.getElementById('listaDisplay');
    listaDisplay.innerHTML = `<p>Memorize esta lista:</p><h2>${lista.join(', ')}</h2>`;

    // Após 5 segundos, a lista desaparece e a área de input é exibida
    setTimeout(function () {
        listaDisplay.innerHTML = '';  // Apaga a lista após 5 segundos
        document.getElementById('inputArea').style.display = 'block';  
    }, 5000);
}

// Função para verificar a resposta do jogador
function verificarResposta() {
    var resposta = document.getElementById('resposta').value;
    var respostaLista = resposta.split(',').map(Number); // Converte a resposta em um array de números

    // Verifica se a resposta está correta
    var resultadoElement = document.getElementById('resultado');
    if (JSON.stringify(respostaLista) === JSON.stringify(lista)) {
        resultadoElement.textContent = "Parabéns! Você acertou!";
        resultadoElement.classList.add("mensagemParabens");
        resultadoElement.classList.remove("mensagemPerdeu");
    } else {
        resultadoElement.textContent = "Infelizmente, você errou. Tente novamente!";
        resultadoElement.classList.add("mensagemPerdeu");
        resultadoElement.classList.remove("mensagemParabens");
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    document.getElementById('resposta').value = '';  // Limpa a resposta
    document.getElementById('resultado').innerHTML = '';  // Limpa o resultado
    iniciarJogo();  // Reinicia o jogo
}

// Função para iniciar o jogo
function iniciarJogo() {
    document.getElementById('inputArea').style.display = 'none'; // Oculta a barra de input no início
    lista = listaAleatoria(5);  // Gera uma lista de 5 números aleatórios
    exibirLista(lista);  // Exibe a lista para o jogador
}

// Variável global para armazenar a lista de números
var lista;   
iniciarJogo();  // Inicia o jogo ao carregar a página
