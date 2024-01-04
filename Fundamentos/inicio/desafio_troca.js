let a = 7;
let b = 94; 

let temp = a; // variável temporária onde foi armazenado o valor de "a" antes da modificação. 
a = b; 
b = temp;


// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);