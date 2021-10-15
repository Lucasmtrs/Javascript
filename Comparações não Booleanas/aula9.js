// Conceito de FALSY
// Todos os valores: 
// Undefined, null, 0, false, '' (string vazio), NaN


// Conceito de TRUTHY
// Tudo que não for falsy.



//ex: comparações
//false || true; no console retorna true;
//false || false; retorna false;
//false || 'lucas'; retorna 'lucas';
//false || 1; retorna 1;

//false || 1 || 3; retorna 1 pq o a comparação considera apenas o primeiro comparador e ignora o resto;

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPerfil;

console.log(corPerfil); //nesse caso ele exibe 'vermelho' pq ele precisa apenas encotrar um valor truthy para valer.
