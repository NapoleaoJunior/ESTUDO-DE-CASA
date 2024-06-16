const operator = prompt('digite o operador(+,-,* ou /):');
const number1 = parseFloat(prompt('digite o primeiro numero: '));
const number2 = parseFloat(prompt('digite o segundo numero: '));

let result;
switch (operator){
    case '+':
        result = number1 + number2;
        break;
        case '-':
            result = number1 - number2;
            break;
            case '*':
                result = number1 * number2;
                break;
                case '/':
                    result = number1 / number2;
                    break;
                    default :
                    result = 'operator invalido';
}
alert('resultado: ' + result);
