// Verbo + Substantivo
// resetaCor reseta é o verbo e o substamtivo é cor 

let corSite = "azul";

function resetaCor(cor,tonalidade){
    corSite= cor + tonalidade;

};

console.log(corSite);

resetaCor("vermelho");
console.log(corSite);

resetaCor("verde"," claro");
console.log(corSite);

// Exercício

function minhaFuncao(carro){
    carro.make = "toyota";
    carro.model = "subaru";
    carro.year = "2015";
};

var meuCarro = {make: "ford", model: "focus", year: 2003};
var x, y;

x = meuCarro.make;
y = meuCarro.year;
z = meuCarro.model;

console.log(x, y, z);



minhaFuncao(meuCarro);
x = meuCarro.make;
y = meuCarro.year;
z = meuCarro.model;
console.log(x, y, z);