let myQuestions = [{
    questions: "Qual destas qualidades NÃO são aplicadas no documento HTML?",
    options: ['Código aberto', 'Linguagem utilizada com diversos recursos e uma comunidade ampla', 'Permite a implementação de lógica', 'Roda em todos os browsers'],
    answer: 2,
    money: 5000
}, {
    questions: "Qual é a tag de um documento HTML pra manter os caracteres acentuados?",
    options: ['<html lang=“pt-br">', '<meta charset=“UTF-8”>', '<body lang=“br”>', '<head charset=“UTF-8”>'],
    answer: 1,
    money: 1000
}, {
    questions: "Como a forma correta de inserir um link?",
    options: ['<a href = "https://github.com/desbugaAi" desbugaAi>', '<a url = "href = "https://github.com/desbugaAi">desgubaAi<a/>', '<a href="https://github.com/desbugaAi">desgubaAi</a>', '<a>https://github.com/desbugaAi</a>'],
    answer: 2,
    money: 400
}, {
    questions: "Como fazer com que cada palavra em um texto se torne maiúscula?",
    options: ['text-transform:capitalize;', 'text-transform:uppercase;', 'text-capitalize', 'text-decoration:uppercase;'],
    answer: 1,
    money: 200
}, {
    questions: "Como inserir padding de modo que seja: 10px top, 15px bottom, 5px right, 10px left",
    options: ['padding:10px 15px 5px 10px;', 'padding:15px 5px 10px 10px;', 'padding:10px 5px 10px 15px;', 'padding: 10px 5px 15px 10px;'],
    answer: 3,
    money: 5000
}, {
    questions: "Qual atributo especifica um texto alternativo para uma imagem caso ela não possa ser exibida?",
    options: ['title', 'alt', 'src', 'h1'],
    answer: 1,
    money: 100
}, {
    questions: "A forma correta de declarar uma regra CSS é:",
    options: ['seletor{valor>propriedade;}', 'seletor{propriedade:valor;}', 'seletor{propriedade=valor;}', 'Nenhuma das alternativas'],
    answer: 1,
    money: 1000.50
}, {
    questions: "Sobre CSS, podemos afirmar que:",
    options: ['Modifica elementos HTML e agrupa elementos que possam receber a mesma formatação', 'Realiza marcação dos elementos semânticos, sem se preocupar com o design', 'Entre as funções, pedemos inserir imagens, textos, links, etc.', 'Surguiu em 1990 para solucionar conflitos semânticos.'],
    answer: 0,
    money: 1000
}, {
    questions: "Como inserir um comentário em um arquivo CSS?",
    options: ['//this is a comment', '/*this is a comment*/', '"this is a comment', '<--!this a comment-->'],
    answer: 1,
    money: 200
}, {
    questions: "Qual é o valor padrão da propriedade position?",
    options: ['static', 'relative', 'fixed', 'absolute'],
    answer: 0,
    money: 6500.20
}, {
    questions: "Qual propriedade define o peso da fonte?",
    options: ['font-weigth', 'text-weight', 'font-style', 'font-weight'],
    answer: 3,
    money: 1050
}, {
    questions: "O simbolo # espeficica qual seletor?",
    options: ['class', 'tag', 'id', 'name'],
    answer: 2,
    money: 800
}, {
    questions: "score",
    options: ['', '', '', ''],
    answer: 0,
}]

let orderAnswer   = ["a", "b", "c", "d", "e"]
let indexQuestion = 0;

let btnAnswer = document.getElementsByClassName('btn');

let sceneTwo   = document.getElementById('sceneTwo');
let sceneOne   = document.getElementById('sceneOne');
let boxAnswer  = document.getElementById('boxAnswer');

let personImg   = document.querySelector('.person-img');
let person      = document.querySelector('.person');
let questionTxt = document.querySelector('.question-txt');

let scoreTxt = document.querySelector('.score-txt');
let moneyTxt = document.querySelector('.money-txt')
let scoreNum = 0;
let moneyNum = 0;

let personSrc = '';

moneyTxt.innerText += moneyNum;

sceneTwo.classList.add('hide');


for (let i = 0; i < btnAnswer.length; i++) {
    questionTxt.innerText  = myQuestions[0].questions;
    btnAnswer[i].innerText = /* ${orderAnswer[i]}) */ `${myQuestions[0].options[i]}`;
}

function getPerson(getCard) {
    var x = document.getElementById(`${getCard}`).getElementsByTagName('img');

    personSrc  = x[0].src;
    person.src = personSrc;

    sceneOne.classList.add('hide');
    sceneTwo.classList.remove('hide');
}

function nextQuestion(btnCurrent) {
    let getResult = myQuestions[indexQuestion].answer;
    /* console.log(myQuestions[indexQuestion].options[getResult]); */

    if (btnCurrent == myQuestions[indexQuestion].options[getResult]) {
        moneyNum += myQuestions[indexQuestion].money;
        moneyTxt.innerText = moneyNum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        scoreNum++;
        scoreTxt.innerText = "score:" + scoreNum;
    }

    if (indexQuestion < myQuestions.length) {
        indexQuestion++; 

        for (let i = 0; i < btnAnswer.length; i++) {
            questionTxt.innerText  = myQuestions[indexQuestion].questions;

            btnAnswer[i].innerText = /* ${orderAnswer[i]}) */ `${myQuestions[indexQuestion].options[i]}`;
            
            if(indexQuestion >= 12){
                btnAnswer[i].style.display = "none";
                if(scoreNum <= 4){
                    questionTxt.innerText  = `Você acertou ${scoreNum} de ${indexQuestion}. Isso significa que você precisa estudar mais um pouquinho.`;
                }else if(scoreNum <= 8){
                    questionTxt.innerText  = `Você acertou ${scoreNum} de ${indexQuestion}. Isso significa que você está no caminho certo, mas pode melhorar.`;
                }else{
                    questionTxt.innerText  = `Parabéns! Você acertou ${scoreNum} de ${indexQuestion}. Significa que você domina muito bem o contéudo.`;
                }
            }
        }
        /* console.log(btnCurrent, indexQuestion); */
    }
}

