//Atribuição condicional
let hora = 14; 
let saudacao = hora <= 11 ? "Boa dia" : "Boa tarde";
console.log(saudacao);
//Operador ternário dentro do outro
let hora1 = 9; 
let saudacao1 = hora1 <= 11 ? "Boa dia" : (hora1 <= 17 ? "Boa tarde" : "Boa noite");
console.log(saudacao1);