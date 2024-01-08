const verdadeiro = true;
const falsa = false; 

if (verdadeiro) { 
    console.log('Exec...');
} else
    console.log('Não exec....');

if (falsa)
    console.log('Não exec...');
else {
    console.log('Exec...');
}
//-------------------------------------------//--------------------------------------------------//---------------------------------
// Uma estrutura "dentro da outra":
const hora = 23;
let saudacao; 
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
     saudacao ="Boa tarde!";
} else if (hora < 22) {
     saudacao = "Boa noite!";
} else {
    saudacao = "Muito tarde!"
}

console.log(saudacao);
// Utilizando ternários:
const hora1 = 20;
let saudacao1; 

if (hora1 < 12) {
    saudacao1 = "Bom dia!";
} else {
   saudacao1 = hora1 < 18 ? "Boa tarde" : "Boa noite";
}
console.log(saudacao1);