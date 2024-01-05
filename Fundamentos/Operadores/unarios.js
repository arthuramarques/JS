let a = 1;
a = a + 1; //infix
a += 1; 
//postfix
a++; 
a--;
//prefix
++a;
--a;
console.log(a);
//-------------------------------Unario2-----------------------//---------------------------------------//---------------------------
let b = 2; 
let c = 3; 

console.log(++b === c++); //código confuso.
/*O operador prefix possui maior precedência com relação ao postfix. 
Aparece true no console em vista da ordem de prioridade: prefix - relacional - postfix.
A partir da linha abaixo do console.log, a variavel c passará a ser igual a 4.*/ 
console.log (b === c);
//Como deveria ser (ficar mais claro):
b++;
console.log(a === b);
c++;
//Dica: escrever códigos claros, bem explicitados.
//-----------------------------------Unario 3-------------------------------------//-----------------------------------------//-----------
console.log(!true);
//Técnica para identificar se algo será avaliado como verdadeiro ou falso
console.log(!!'Texto!'); 
console.log(!!'');
//Á exceção do valor zero, todos os demais números são convertidos em verdadeiro.
console.log(!!0);
console.log(!!1);
console.log(!!-1);
console.log(!!-0.00001);