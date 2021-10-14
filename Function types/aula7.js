//tipos:
// 1) Realiza uma tarefa, e não devolve nada

function dizerNome(){
    console.log('lucas')
};

dizerNome();

//faz um calculo ou uma operação  e retorna algo
function multiplicarPorDois(valor){
    return valor* 2;
};

console.log(multiplicarPorDois(10));

//forma 2
function square(numero){
    return numero * numero;
};

console.log(square(50));

//forma 3 usando variavel
let resultado = multiplicarPorDois(25);

console.log(resultado);
//ou

const result = square(250);

console.log(result);