// Condicionais: 

//If .. Else
//Switch .. case

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!;  (: exibir)
// Se estiver entre 12:00 até 18:00 : Boa tarde!;
// Caso contrário : Boa noite!;


// if (condicao) {
//     //codigo a ser executado
// };

// elseIf (outraCondicao){
//     //codigo a ser executado
// };

// else {
//     //codigo a ser executado
// };


let hora = 10;

if(hora > 6 && hora < 12){
    console.log("Bom dia!");
}      //prestar atenção quando tiver else, não colocar ; ponto e virgula.

else if(hora > 12 && hora < 18){
    console.log("Boa tarde!");
}

else{
    console.log("Boa noite!")
};






// Switch .. Case
//ex: cenário com permissões diferentes
let permissao; //comum, gerente, diretor;
permissao = '';

switch(permissao){
    case 'comum':
    console.log('usuário comum');
    break;            //break define que deve parar aí essa condição

    case 'gerente':
    console.log('usuário gerente');
    break;

    case 'diretor':
    console.log('usuário diretor');
    break;

    default:         //define o que acontece quando n é nenhuma das condições acima
    console.log('usuário não reconhecido');
};