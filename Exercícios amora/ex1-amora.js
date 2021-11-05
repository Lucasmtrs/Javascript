//Variáveis
//- Criar variáveis (var | let | const)
//- Alterar valor da variáveis (var | let)

var brands = "crysler";

let age = 58;

const isApproved = false;


var brands = "lotus";
console.log(brands);  //resultado Lotus

age = 101;
console.log(age); //resultado 101





//Objeto
//- Criar um novo objeto
//- Acessar um atributo de um objeto
//- Alterar um atributo de um objeto depois de criado
//- Adicionar um novo atributo ao mesmo objeto depois de criado
//- Criar um novo objeto e copiar todos os atributos do primeiro objeto criado anteriormente, adicionando também um novo atributo qualquer. (Com e sem spread operator)
//- Realize a desestruturação de um objeto e imprima ao menos dois atributos

//parte 1
let myBedroom = new Object();
myBedroom.color = "white";
myBedroom.size = "16 m2";
myBedroom.ceilingMaterial = "wood";

myBedroom['color'] = "blue";
myBedroom['ceilingMaterial'] = "concrete";

myBedroom['floorColor'] = "grey"

console.log(myBedroom);

//parte 2
let myBathroom = { myBedroom };

console.log(myBathroom)











//Array
//- Criar um novo array
//- Adicionar um novo item no final do array
//- Remover o último item do array
//- Criar um novo array e copiar todos os itens do primeiro array criado anteriormente, adicionando também um novo item no final do array. (Depois, tente adicionar no início) (Com e sem spread operator)
//- Realize a desestruturação de um array e imprima os dois primeiros itens.

//BÔNUS: Se sentir que conseguiu evoluir rapidamente nos Arrays, "dê uma olhada" nos métodos .map, .filter, .find, .reducer

//Função
//- Criar uma nova função com e sem retorno
//-  Modificar função para que ela receba um parâmetro chamado "idade* e retorne a o ano que a pessoa nasceu usando 2021 como referência.
//- Realize a mesma tarefa usando a classe new Date() para recuperar o ano atual, ao invés de usar 2021 como referência
//(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
//- Modifique a função para que ela receba um segundo parâmetro chamado "name" que, se não for passado um segundo parâmetro para função, ele terá como valor padrão "Lorem Ipsum" (Dica: você NÃO deve criar uma nova variável para receber esse valor padrão) 
