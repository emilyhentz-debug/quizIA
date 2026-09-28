const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
  
    alternativas: [
{
texto: 'Isso é assustador!',
afirmacao: 'afirmacao'
},
{
texto: 'Isso é maravilhoso',
afirmacao: 'afirmacao'
}
]
},

  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
{
texto: 'Isso é assustador!',
afirmacao: 'afirmacao'
},
{
texto: 'Isso é maravilhoso',
afirmacao: 'afirmacao'
}
]
},

  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
{
texto: 'Isso é assustador!',
afirmacao: 'afirmacao'
},
{
texto: 'Isso é maravilhoso',
afirmacao: 'afirmacao'
}
]
},

];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativa = document.createElement(button);
botaoAlternativa.textContent = alternativa.texto;
botaoAlternativa.addEventListener(click, function() {
atual++;
mostraPergunta();
})
}
}
{
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraPergunta();
}
