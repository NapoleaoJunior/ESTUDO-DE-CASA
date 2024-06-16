
let numero = prompt('digite um numero para verificar se é par ou impar');

function verificarParImpar(numero){
    if(numero % 2 === 0){
    alert(`${numero} é um numero par.`);
    }else{
    alert(`${numero} é um numero impar.`);
    }
}

verificarParImpar(numero);