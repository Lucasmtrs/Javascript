//Laços e loops

//1- For;
//2- While;
//3- Do..while;
//4- For..in;
//5- For..of



// For
//ex. fazer uma frase aparecer 5x

for(let i = 0; i < 5; i++){
    console.log('estou aprendendo', i); //coloca a variavel i para ver as vezes q aparece.
}; 

//i é uma variável abreviação de index/indice, ela vai servir de contador
//quero que o i fique rodando em loop até que i seja menor que 5 (condição), (expressão de incremento) quando o loop finaliza, nesse caso ele vai incrementer por 1 (++)
//O que o programa entende: o i é igual a 0? sim, então imprime 0, e soma 1;
// 1 é menor que 5? sim, imprime 1 e soma 1;
// 2 é menor que 5? sim, imprime 2 e soma 1;
//...
//ao chegar no 5 ele parae só imprime até o menor que 5, o 4. 
//(se colocar i <= 5  ele imprime 5 também)

//ex.2 For usando if para números impares
for(let a = 1; a <= 15; a++){
    if(a % 2 !== 0){
        console.log(a);
    };
};

//ex.3 For usando if para decrescer números pares apenas
for(let b = 6; b >= 1; b--){
    if(b % 2 == 0){
        console.log(b);
    }
}


cars = ["uno", "marea", "celtinha"];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

numeros = [5, 6, 7];
for(let a = 0; a < numeros.length; a++){
    console.log(numeros[a] ** 2)
}

