const a = 15; 
const b = 28;
const operacao = '-' // +, -, /, %
let resultado 

if (operacao === '*') {
    console.log('TESTE')
    resultado = a * b;
} else if (operacao === '/') {
    resultado = a / b;
} else if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '%') {
    resultado = a % b;
} else  
resultado = a - b; 



console.log(resultado);