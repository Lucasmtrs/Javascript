//Variáveis
//- Criar variáveis (var | let | const)
//- Alterar valor da variáveis (var | let)

var brands = "chrysler";

let age = 58;

const isApproved = false;


brands = "lotus";
console.log(brands);  //resultado Lotus

age = 101;
console.log(age); //resultado 101


/*
comentário 
 */ 

/*
  Objeto
- Criar um novo objeto
- Acessar um atributo de um objeto
- Alterar um atributo de um objeto depois de criado
- Adicionar um novo atributo ao mesmo objeto depois de criado
- Criar um novo objeto e copiar todos os atributos do primeiro objeto criado anteriormente, adicionando também um novo atributo qualquer. (Com e sem spread operator)
- Realize a desestruturação de um objeto e imprima ao menos dois atributos
*/

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
let myBathroom = new Object();
myBathroom.floorMaterial = "ceramic";
 { myBedroom, myBathroom.floorMaterial };

console.log(myBathroom);

let mySuite = { ...myBedroom, ...myBathroom }; //com spread operator
console.log(mySuite);

let myHouse = Object.assign(myBedroom, myBathroom);

console.log(myHouse);

//parte 3 desestruturar objeto

const myDog = {
  dogName: 'kiara',
  dogAge: 2
};

const {dogName, sex = 'female'} = myDog;

console.log(dogName);
console.log(sex);

function printDogSex(dog) {
  if (dog.sex) {
    return dog.sex
  } else {
    return 'female'
  }
}

function printDogSex2({dogName, sex = 'female'}) {
    return sex
  
};

console.log('Dog:', printDogSex2(myDog));

//Array
//- Criar um novo array
//- Adicionar um novo item no final do array
//- Remover o último item do array
//- Criar um novo array e copiar todos os itens do primeiro array criado anteriormente, adicionando também um novo item no final do array. (Depois, tente adicionar no início) (Com e sem spread operator)
//- Realize a desestruturação de um array e imprima os dois primeiros itens.

const familyAges = [28,56,48,54];

familyAges.push(65); //nomeDaVariável.push(); adiciona um último item ao array;

console.log(familyAges);

familyAges.length = 4; //nomeDaVariavel.pop(); também remove o ultimo item
console.log(familyAges);

const grandmaAge = [92];

const allFamilyAges = [ ...familyAges, ...grandmaAge ]; //com spread operator
console.log(allFamilyAges);


const allAges = [];

for (const age of familyAges) {
  allAges.push(age)
};  

console.log({allAges}); //colocar {} quando tiver múltiplos consoles logs para diferenciar 

//debugger //permite que o codigo seja executado 

// for ...of usado para percorrer um Array
// for ...in usado para percorrer um objeto

function cars() {
  return ['prius', 'ranger', 'celta']
};

const [orange, white] = cars();

console.log(orange);
console.log(white);




//BÔNUS: Se sentir que conseguiu evoluir rapidamente nos Arrays, "dê uma olhada" nos métodos .map, .filter, .find, .reducer

//Função
//- Criar uma nova função com e sem retorno
//-  Modificar função para que ela receba um parâmetro chamado "idade* e retorne a o ano que a pessoa nasceu usando 2021 como referência.
//- Realize a mesma tarefa usando a classe new Date() para recuperar o ano atual, ao invés de usar 2021 como referência
//(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
//- Modifique a função para que ela receba um segundo parâmetro chamado "name" que, se não for passado um segundo parâmetro para função, ele terá como valor padrão "Lorem Ipsum" (Dica: você NÃO deve criar uma nova variável para receber esse valor padrão) 

function dizerNome(){ //sem return
  console.log('lucas')
};

dizerNome();

function square(numero){ //com return
  return numero * numero; 
};

console.log(square(50)); //50 é um parametro




function age1(idade){ //adicionar a idade
  return 2021 - idade
  
};

console.log(age1(1940))


function age2(idade1){
  const today = new Date(2021);

  return today - idade1
}

console.log(age2(1990))
//const today = new Date();

//console.log(today);


function printName(name){
  if (name) {
    return name
  } else {
    return 'lorem ipsum'
  } 

}



console.log('name:', printName())

