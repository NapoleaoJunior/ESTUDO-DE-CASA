function maiorQueCinco(array){
const novoArray = array.filter((numero)=>{
        return numero >= 5;
});
return novoArray;
}

const numeros = [2,5,85,36,4,11,1,87,3,58,4.5,3.2,99];
const maioresNumeros = maiorQueCinco(numeros);
alert('numeros maiores que 5 ou igual a 5 : ' +  maioresNumeros);