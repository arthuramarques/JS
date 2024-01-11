//Declaração e atribuição de variáveis
const x = 123;
let y = 321;
var z = 323;
//Funções como variáveis (Obs.: IIFE)
//function (a,b) {
//  return a + b; (Função anônima.)
//}

//Isso permite ampliar o leque de possibilidades de manuseio dessa função. 
const somar = function (a, b) {
    return a + b;
}

//É possível atribuir uma função que já foi nomeada.
function subtrair(c, d) {
    return c - d;
}

const subtracao = subtrair

console.log(subtrair(5, 2));
console.log(subtracao(5, 2));