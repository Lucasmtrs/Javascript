// Operadores Aritiméticos (matemáticos)
// Operadores de Atribuição
// Operadores de Comparação
// Operadores Lógicos
// Operadores Bitwise

//Operadores aritiméticos: 
let salario = 100;

// + , - , * , / , **(o número vezes ele mesmo, exponencial)

console.log(salario + salario);
console.log(salario - 50);
console.log(salario * salario);
console.log(salario / 5);
console.log(salario ** salario);


// ++ e -- 
// São operadores de INCREMENTO e DECREMENTO:
let idade = 18;

console.log(++idade);  // adiciona 1 ao número
console.log(--idade);  // retira 1 do número



// Operadores de Atribuição:
let valorTecladoGamer = 200;
console.log(valorTecladoGamer);

// o sinal = é um operador de atribuição
// o sinal += é um operador que significa: valorTecladoGamer =  valorTecladoGamer +  valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// -= significa x = x - x
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);


// Operadores de igualdade:
// igualdade estrita (a mais utilizada):
console.log(1 === 1); // === significa que além dos valores ele está comparando o tipo, ou seja, ele comprarou que o 1 é um valor e também que ele é um número(tipo);
//retorna true, 1 é um numero e também valor

console.log('1' === 1); //retorna false, 1 é string(tipo)

//igualdade solta:
console.log (1 == 1); // == ele compara só valores
console.log ('1' == 1); // retorna true, pq ele considera apenas valor, ignora o tipo string



// Operador Ternário:
// serve para deixar de usar vários if's, e fazer o code de forma mais limpa
//ex: tem um cliente, se o cliente tem mais de 100 pontos ele é premium, se tem menos é comum;
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum'; //se pontos for maior que 100, ele vai ser do tipo premium caso contrário, ele vai ser do tipo comum.
console.log(tipo);




// Operadores Lógicos:
// and, or e not

// and (&&) --> retorna true, se os operandos forem true;
console.log(true && true); //true
console.log(true && false); //false

//ex: uma pessoa que quer entrar numa vaga mas tem q ser maior de 18 e ter carteira de trabalho;
const maiorDeIdade = true;
const possuiCarteiraDeTrabalho =  true;
const podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar); //true

//let maiorDeIdade = true;
//let possuiCarteiraDeTrabalho =  false;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//console.log(podeAplicar); //false









