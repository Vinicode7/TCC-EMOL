function Ferramentas() {
    while (true) {
        console.log('1: Jogos');
        console.log('2: Calculadora');
        console.log('3: Filmes');
        console.log('4: Tempo');

        const PerguntaFerramenta = prompt('Escolha uma opção: ');
        
        if (PerguntaFerramenta == '1') {
            console.log(" Vocé escolheu Jogos.");
            Jogos();
        } else if (PerguntaFerramenta == '2') {
            console.log(" Vocé escolheu Calculadora.");
            menuCalc();
        } else if (PerguntaFerramenta == '3') {
            console.log(" Vocé escolheu Filmes.");
            recomendar_filme();
        } else if (PerguntaFerramenta == '4') {
            console.log(" Vocé escolheu Tempo.");
            const cidade = prompt("Digite o nome da cidade: ");  
            climasimples(cidade);  
        } else {
            console.log('Opção inválida, tente novamente.');
        }
    }
}

function Jogos() {
    console.log('Escolha um jogo:');
    console.log('1: Adivinhação');
    console.log('2: Forca');
    console.log('3: Memória');

    const escolha_jogo = prompt('Escolha o número do jogo que deseja jogar: ');

    if (escolha_jogo == '1') {    
        console.log("Iniciando o jogo de Adivinhação...");
        jogoAdivinhacao();
    } else if (escolha_jogo == '2') {
        console.log("Iniciando o jogo da Forca...");
        jogoforca();
    } else if (escolha_jogo == '3') {
        console.log("Iniciando o jogo de Memória...");
        jogoMemoria();
    } else {
        console.log('Opção inválida, tente novamente.');
    }
}

console.log('Olá! Seja bem-vindo! Me chamo JarvisMark01, e hoje irei acompanhá-lo nessa jornada.');
console.log();
console.log('Irei te mostrar algumas ferramentas da minha primeira versão. Caso queira testá-las, siga as instruções abaixo.');  
Ferramentas();