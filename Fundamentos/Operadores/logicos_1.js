//Variáveis
let temDinheiro = true; 
let estaEnsolarado = true; 
let carroEstaNaGaragem = false;

// Atribuidor lógico AND
let resultadoE = "Vai (AND) pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

//Atribuidor lógio OR
let resultadoOU = "#2 (OR) - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem; // simbolo "pipe"
console.log(resultadoOU);

//Atribuidor lógico XOR
console.log(true !== true); //existe o símbolo ^ para XOR, porém o resultado sairá em binário
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

//Atribuidor lógico NOT
console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);

//-------------------------------------Lógicos 2 ---------------//--------------------------------------------//--------------------
const t1 = true; 
const t2 = true; 

let comprarTV50 = t1 && t2; //AND
console.log("Vamos comprar a TV 50\"? " , comprarTV50); 

let comprarTV32 = t1 !== t2; //XOR

console.log("Vamo comparar a TV 32\"? ", comprarTV32);

let tomarSorvete = t1 || t2; //OR
console.log("Vamos comprar sorvete? ", tomarSorvete); 

let ficarEmCasa = !tomarSorvete; //NOT
console.log("Vamo ficar em casa? ", ficarEmCasa); 