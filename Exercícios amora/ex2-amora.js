// Exercise 'hello world' or 'Ólá Mundo'

/*
function add(x, y){
    alert('A soma é:' + (x + y));
}

add(2048,1024);

console.log(add()); 
*/

let x = 7;
let y = 15;

function changeVarValue() {
    let z = x;
    x = y;
    y = z;
    return {x,y}
    
};

console.log(changeVarValue(x, y));

/*
var arrayMax = [45,28,36,54,63,52,85];





let arrayDesorganizado = [5,6,8,9,7,3,2,1,4];

function retornaArrayOrdenado(x,y){
    if (x == y) return 0;
    if (x < y) return -1;
    if (x > y) return 1;
};

arrayDesorganizado.sort(retornaArrayOrdenado); 

*/
