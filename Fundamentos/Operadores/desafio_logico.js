// Duas expressões com TRUE (Lógicos, Relacionais e Aritméticos)
//Definindo as constantes
const a = 2 + 3;
const b = 7 * 7; 

let resultado1 = a > b;
let resultado2 = a <= b; 

let verdadeiro1 = resultado1 !== resultado2; 
let verdadeiro2 = resultado1 || resultado2;

console.log(verdadeiro1, verdadeiro2);

//Duas expressões com FALSE
let resultado3 = b === a;
let resultado4 = b <= a;

let falso1 = resultado3 && resultado4;
let falso2 = !verdadeiro2;

console.log(falso1, falso2);

//----------------------------------------------Resposta---------------//----------------------------------------//----------------
//Resultados verdadeiros
let verdadeiroR1 = 2 + 3 > 7 * 7 !== 2 + 3 <= 7 * 7;
let verdadeiroR2 = 2 + 3 > 7 * 7 || 2 + 3 <= 7 * 7; 
console.log(verdadeiroR1);
console.log(verdadeiroR2);
//Resultados falsos
let falsoR1 = !((7 % 5) / 1 > 0);
let falsoR2 = 2 * 8 === 0.89;
console.log(falsoR1);
console.log(falsoR2);