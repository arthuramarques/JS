const a = 4; 
const b = 8;
const operacao = '*'

let resultado = operacao == '+' ? a + b 
: operacao == '-' ? a - b 
: operacao == "*" ? a * b 
: a / b;
console.log(resultado);