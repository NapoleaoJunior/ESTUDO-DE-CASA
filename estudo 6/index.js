const numeros = [1,2,3,4,5];

function mudarCor(novaCor){
    const elementoNovo = document.createElement('p');   
}

for(let index = 0; index < numeros.length; index++){
    const elemento = document.getElementById('p');
        
    if(numeros[index] % 2 === 0){
        elemento.textContent = `o numero ${numeros[index]} é par.`;
    }else{
        elemento.textContent = `o numero ${numeros[index]} é impar.`;
    }
} 