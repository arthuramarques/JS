//Índices:      0    1    2   3    4    5 
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];
//Acessando dados de um array.
console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
//Modificando o elemento de um array.
notas[4] = 8.7;
console.log(notas);
//----------------------------------------------------//--------------------------------------------//-------------------------------
const nomes = [];
console.log(typeof nomes);
//A partir de um array vazio é possível ir acrescentando elementos.
nomes[0] = 'Pedro';
nomes[1] = 'Ana';
nomes[2] = 'Bia';
nomes[3] = 'Gui';
nomes[4] = 'Rebeca';
nomes[9] = 'Tiago';
console.log(nomes);
//--------------------------------------------//------------------------------------------------------------//------------------------
//Discutindo por que o array é um objeto
console.log(typeof console);
console.log(typeof console.log);//Método é uma função que foi colocada em um objeto. 
//Analogia: o objeto seria como se fosse uma pasta de computador. Dentro de um objeto é possível colocar dados, funções..
const numeros = [1, 2, 3];
console.log(typeof numeros);
//Assim como é possível acessar funções dentro do object console,  também é possível acessar funções existentes no array.
//A função push adiciona elementos dentro do array.
numeros.push(4);
numeros.push(5);
numeros.push(10);
console.log(numeros);

console.log(numeros.length); //Length é um atributo.