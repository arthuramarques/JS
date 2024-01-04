// Por enquanto, do lado esquerdo de uma atribuição é preciso uma variável.
let x = 10;
//x + 6 = x  forma inválida.
x = x + 6; 
x = x -1; 

let y = 20; 
y += 10; //atribuição de soma (y = y + 10)
y -= 2; //atribuição de subtração (y = y - 2)
y *= 2; //atribuição de multiplicação (y = y * 2)
y /= 4;//atribuiçõ de divisão (y = y / 4)
y %= 3; //atribuição de módulo (y = resto de y/3)

let w = "texto";
w += ", mais texto";

console.log(x);
console.log(y);
console.log(w);

//Utilizando o \n para quebrar linha 
let texto = "Bom dia!"
texto += "\nTudo bem?";
console.log(texto);