let numero = parseInt(prompt('digite um numero'));

function verifica(numero){
    if(numero === 0){
    alert('o numero é nulo');
}else if(numero % 2 === 0){
    alert('o numero é par.');
}else{
    alert('o numero é impar');
}
}
verifica(numero);