function jogoAdivinhacao() {
    var numeroSecreto = Math.floor(Math.random() * 20) + 1;
    var tentativas = 3;
    var acertou = false;

    while (!acertou && tentativas > 0) {
        var chute = parseInt(prompt('Tente um número de 1 a 20: '));
        tentativas--;

        if (chute < numeroSecreto) {
            alert('O número secreto é maior, tente novamente com um número maior.');
        } else if (chute > numeroSecreto) 
            alert ('O número secreto é menor, tente novamente com um número menor.');
        else {
            acertou = true;
            alert('Parabéns, vocé acertou!');
        }
    }
    if (!acertou) {
        alert('Vocé falhou. Tente novamente.');
    }

    var novamente = prompt('Quer jogar novamente? (sim/nao)');
    if (novamente === 'sim') {
        jogoAdivinhacao();
    } else {
        alert('Obrigado por jogar!');
    }
}

var numeroSecreto = Math.floor(Math.random() * 20) + 1;
        var tentativas = 3;
        var acertou = false;

        function verificarChute() {
            var chute = parseInt(document.getElementById('chute').value);
            var mensagem = document.getElementById('mensagem');

            if (isNaN(chute) || chute < 1 || chute > 20) {
                mensagem.innerText = 'Digite um número válido entre 1 e 20!';
                return;
            }

            tentativas--;

            if (chute < numeroSecreto) {
                mensagem.innerText = 'O número secreto é maior, tente novamente!';
            } else if (chute > numeroSecreto) {
                mensagem.innerText = 'O número secreto é menor, tente novamente!';
            } else {
                acertou = true;
                mensagem.innerText = 'Parabéns, você acertou!';
                document.getElementById('reiniciar').style.display = 'block';
            }

            if (tentativas === 0 && !acertou) {
                mensagem.innerText = 'Você falhou. O número secreto era ' + numeroSecreto + '.';
                document.getElementById('reiniciar').style.display = 'block';
            }
        }

        function reiniciarJogo() {
            numeroSecreto = Math.floor(Math.random() * 20) + 1;
            tentativas = 3;
            acertou = false;
            document.getElementById('chute').value = '';
            document.getElementById('mensagem').innerText = '';
            document.getElementById('reiniciar').style.display = 'none';
        }

        function (){
            alert('eu sou lindo')
        }