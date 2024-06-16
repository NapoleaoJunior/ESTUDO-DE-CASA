let numero1 = parseFloat(prompt('digite um numero'));
let numero2 = parseFloat(prompt('digite outro numero'));

function operacoes(numero1,numero2,operacao) {
    let resultado = 0;
    if(operacao === '+'){
    resultado = numero1 + numero2;
    }
    alert('resultado da operação ' + operacao + ' é  ' + resultado);
    confirm('OK, mandou bem');
}  
operacoes(numero1,numero2,'+');