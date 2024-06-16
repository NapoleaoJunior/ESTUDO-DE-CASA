
let idade = parseInt(prompt('digite sua idade(se for menor que 18 não pode dirigir'));
let motorista1 = 18;
let motorista2 = 21;
let abilitacao1 = 'b';
let abilitacao2 = 'd';
let resultado = '';

for (let index = 0; index <= idade; index++) {
   if (idade === motorista1) {
    resultado = abilitacao1
   } else if(idade >= motorista2){
    resultado = abilitacao2
   }else if(idade < motorista1){
    resultado = 'não pode dirigir';
   }  
}
alert(resultado);

