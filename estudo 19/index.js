let produtos = [];
let precos = [];
let quantidade = [];
let total = 0;

while(true) {
   const produto = prompt('digite um produto ( ou "fim" para encerrar)');
   if (produto === 'fim') {
    break;
   }
   const preco = parseFloat(prompt('digite o valor do produto'));
   produtos.push(produto);
   precos.push(preco);
   total += preco;
}
const resultado = `total das compras : R$ ${total.toFixed(2)}`;
alert(resultado);