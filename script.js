const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas"); 
const caixaAlternativas = document.querySelector(".caixa-alternativas"); 
const caixaResultado = document.querySelector(".caixa-resultado"); 
const textoResultado = document.querySelector(".texto-resultado"); 

const perguntas = [ 
    { 
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?", 
        alternativas: [ 
            { texto: "Isso é assustador!", afirmacao: "Você achou a evolução da IA assustadora no início." }, 
            { texto: "Isso é maravilhoso!", afirmacao: "Você viu o lado positivo e achou a tecnologia maravilhosa." } 
        ] 
    },
    { 
        enunciado: "Seu professor pede um trabalho de história e você percebe que pode usar essa IA para gerar todo o texto em segundos. O que você faz?", 
        alternativas: [ 
            { texto: "Usa a ferramenta para fazer o trabalho todo e entrega sem revisar.", afirmacao: "Decidiu confiar plenamente na automação para suas tarefas acadêmicas." }, 
            { texto: "Usa a ferramenta apenas para pesquisar ideias e escreve o texto com suas próprias palavras.", afirmacao: "Preferiu usar a tecnologia como suporte, mantendo sua autoria." } 
        ] 
    } 
]; 

let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; // Variável que faltava para armazenar as afirmações

function mostraPergunta() { 
    // Se o índice atual for maior ou igual ao número de perguntas, exibe o resultado final
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() { 
    for(const alternativa of perguntaAtual.alternativas) { 
        const botaoAlternativa = document.createElement("button"); 
        botaoAlternativa.textContent = alternativa.texto; 
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    } 
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Junta as respostas para o resumo final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block"; // Revela o contêiner de resultado que estava oculto
}

// Inicializa o quiz chamando a primeira pergunta
mostraPergunta();
