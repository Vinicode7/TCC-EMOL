const filmes = {
    terror: [
        "O Exorcista", "Hereditário", "Corra!", "It: A Coisa", "O Babadook",
        "Halloween", "Annabelle", "O Chamado", "Invocação do Mal", "A Bruxa",
        "Fragmentado", "Midsommar", "Psicose", "Sobrenatural", "O Iluminado",
        "Cemitério Maldito", "REC", "Pânico", "Atividade Paranormal", "Drácula de Bram Stoker",
        "Candyman", "A Entidade", "A Hora do Pesadelo", "O Massacre da Serra Elétrica", "A Vila",
        "Jogos Mortais", "Possessão", "O Mistério de Candyman", "Ju-On: O Grito", "O Ritual",
        "O Homem de Palha"
    ],
    comédia: [
        "As Branquelas", "Se Beber, Não Case", "Ted", "Click", "Gente Grande",
        "Escola de Rock", "Superbad", "Ace Ventura", "Debi & Lóide", "O Virgem de 40 Anos",
        "Norbit", "Vizinhos", "Minha Mãe é uma Peça", "Divertida Mente", "American Pie",
        "Deadpool", "Quero Matar Meu Chefe", "Zumbilândia", "A Proposta", "Curtindo a Vida Adoidado",
        "O Máskara", "Trovão Tropical", "Jumanji", "Show de Vizinha", "Esqueceram de Mim",
        "A Mentira", "Os Caça-Fantasmas", "Um Maluco no Golfe", "Click", "Space Jam",
        "Tropa de Elite"
    ],
    ação: [
        "Gladiador", "John Wick", "Mad Max: Estrada da Fúria", "Matrix", "O Cavaleiro das Trevas",
        "Missão Impossível", "O Exterminador do Futuro", "Pantera Negra", "Vingadores: Ultimato", "Homem-Aranha",
        "Capitão América", "Mulher-Maravilha", "Thor", "Logan", "Resgate",
        "Expresso do Amanhã", "Os Mercenários", "Transformers", "O Justiceiro", "300",
        "O Senhor dos Anéis", "O Hobbit", "Duro de Matar", "Rambo", "Top Gun",
        "Corações de Ferro", "O Predador", "Viúva Negra", "Shang-Chi", "Aquaman",
        "Os Infiltrados"
    ],
    romance: [
        "Titanic", "Diário de Uma Paixão", "A Culpa é das Estrelas", "P.S. Eu Te Amo", "Querido John",
        "Simplesmente Acontece", "Um Amor para Recordar", "Cartas para Julieta", "Como Eu Era Antes de Você", "Amizade Colorida",
        "Orgulho e Preconceito", "De Repente 30", "Cinderela", "A Bela e a Fera", "Crepúsculo",
        "Eclipse", "Amanhecer", "Ghost", "Dirty Dancing", "Lua Nova",
        "O Casamento do Meu Melhor Amigo", "Amor a Toda Prova", "Moulin Rouge", "Lembranças", "Ritmo Quente",
        "Shakespeare Apaixonado", "Noivo Neurótico, Noiva Nervosa", "Romeu e Julieta", "Além da Morte", "O Grande Gatsby",
        "Uma Linda Mulher"
    ],
    animação: [
        "Shrek", "Toy Story", "Procurando Nemo", "Divertida Mente", "Os Incríveis",
        "Monstros S.A.", "Wall-E", "Ratatouille", "Up: Altas Aventuras", "Frozen",
        "Encanto", "Viva: A Vida é uma Festa", "Moana", "Zootopia", "Detona Ralph",
        "Kung Fu Panda", "Meu Malvado Favorito", "Minions", "Madagascar", "A Era do Gelo",
        "Como Treinar o Seu Dragão", "Os Croods", "O Caminho para El Dorado", "Aladdin", "Rei Leão",
        "A Pequena Sereia", "Hércules", "Mulan", "Hotel Transilvânia", "Rio",
        "Monsters University"
    ]
};

function recomendar_filme(generoSelecionado) {
    try {
        const filmesDoGenero = filmes[generoSelecionado];
        const filmeEscolhido = filmesDoGenero[Math.floor(Math.random() * filmesDoGenero.length)];
        
        // Atualiza o conteúdo do elemento na página
        document.getElementById('resultado').textContent = `Filme recomendado: ${filmeEscolhido}`;
    } catch (error) {
        document.getElementById('resultado').textContent = `Erro: ${error.message}`;
    }
}

