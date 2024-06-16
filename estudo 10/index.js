function generateRandomArray(){
    const randomArray = [];
    for(let index = 0; index < 10; index++){
        randomArray.push(Math.floor(Math.random()* 100) + 1);
    }
    return randomArray;
}

function bubbleSort(array){
    const arrayLength = array.length;
    let isSwapped;

    for(let i = 0; i < arrayLength; i++){
       isSwapped = false;

       for(let I = 0; I < arrayLength; I++){
        if(array[I] > array[I + 1]){
            [array[I], array[I + 1]] = [array[I + 1], array[I]];
            isSwapped = true;
        }
       }

       if (!isSwapped) {
        break;
       }
    }
    return array;
}

const meuArray = generateRandomArray();
const arrayOrdenado = bubbleSort(meuArray);

alert('array ordenado :' + arrayOrdenado);
