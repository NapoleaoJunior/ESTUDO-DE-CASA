
let lista = [];
let resultado = '';

while(true){
let produto = prompt('digite um produto(ou fim para encerrar)');
if (produto === 'fim') {
  break;  
}
lista.push(produto);
}
lista.sort();
let listaOrdenada = lista.join('<br>');
document.getElementById('lista').innerHTML = listaOrdenada;