const palavras = ["biologia", "quimica", "filosofia", "matematica", "gramatica", "redacao"];
let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
let palavraCorreta = Array(palavraEscolhida.length).fill("_");
let letrasErradas = [];
let tentativas = 6;

const estagiosBoneco = [
    ` +----+
 |    |
      |
      |
      |
      |
========`,
    ` +----+
 |    |
 O    |
      |
      |
      |
========`,
    ` +----+
 |    |
 O    |
 |    |
      |
      |
========`,
    ` +----+
 |    |
 O    |
/|    |
      |
      |
========`,
    ` +----+
 |    |
 O    |
/|\\   |
      |
      |
========`,
    ` +----+
 |    |
 O    |
/|\\   |
/     |
      |
========`,
    ` +----+
 |    |
 O    |
/|\\   |
/ \\   |
      |
========`
];

function atualizarBoneco() {
    // Atualiza o boneco com base nas tentativas restantes
    const indice = 6 - tentativas;
    document.getElementById("boneco").innerHTML = `<pre>${estagiosBoneco[indice]}</pre>`;
}

function atualizarPalavra() {
    document.getElementById("palavra").innerText = palavraCorreta.join(" ");
    document.getElementById("letras-erradas").querySelector("span").innerText = letrasErradas.join(", ");
    document.getElementById("tentativas").querySelector("span").innerText = tentativas;
}

function mostrarMensagem(mensagem, classe) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = mensagem;
    mensagemDiv.className = classe; // Adiciona a classe para estilização
}

function verificarEntrada() {
    const entrada = document.getElementById("palavra-input").value.toLowerCase().trim();
    document.getElementById("palavra-input").value = '';

    if (entrada.length === 1) {
        if (palavraEscolhida.includes(entrada)) {
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === entrada) {
                    palavraCorreta[i] = entrada;
                }
            }
        } else {
            if (!letrasErradas.includes(entrada)) {
                letrasErradas.push(entrada);
                tentativas--;
                atualizarBoneco();
            }
        }
    } else if (entrada.length > 1) {
        if (entrada === palavraEscolhida) {
            palavraCorreta = palavraEscolhida.split("");
        } else {
            tentativas--;
            atualizarBoneco();
            mostrarMensagem("Palavra incorreta!", "erro");
        }
    }

    atualizarPalavra();

    if (tentativas === 0) {
        mostrarMensagem(`Você perdeu! A palavra era: ${palavraEscolhida}`, "perdeu");
        document.getElementById("input").style.display = "none";
        document.getElementById("reiniciar").style.display = "block";
    } else if (!palavraCorreta.includes("_")) {
        mostrarMensagem("Parabéns! Você venceu!", "venceu");
        document.getElementById("input").style.display = "none";
        document.getElementById("reiniciar").style.display = "block";
    }
}

function reiniciarJogo() {
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    palavraCorreta = Array(palavraEscolhida.length).fill("_");
    letrasErradas = [];
    tentativas = 6;
    atualizarBoneco();
    atualizarPalavra();
    mostrarMensagem("", "");
    document.getElementById("input").style.display = "block";
    document.getElementById("reiniciar").style.display = "none";
}

atualizarBoneco();
atualizarPalavra();
