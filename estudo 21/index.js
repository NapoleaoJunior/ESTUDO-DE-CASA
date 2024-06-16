function calcular(operação){
    var numero1 = document.getElementById('numero1').value ;
    var numero2 = document.getElementById('numero2').value;
    var resultado;

    switch (operação) {
        case '+':
            resultado = parseFloat(numero1) +parseFloat(numero2);
            break;
    
    case '-':
        resultado = numero1 - numero2;
        break;

        case '*':
            resultado = numero1 * numero2;
            break;

            case '/':
                resultado = numero1 / numero2;
                break;
}
document.getElementById('resultado').innerHTML = 'resultado : ' + resultado;
return resultado;
}