const numeros = [1, 2, 3, 4, 5];
numeros[0] = 100;
numeros.push(6); //Joga novos elementos no array.
console.log(numeros);

console.log(numeros.join(' - ')); //Add todos os elementos do array.

const numeros2 = numeros.concat(7, 8, 9); //Gera um novo array e não mexe no array existente.
console.log(numeros2);

console.log(numeros.includes(10));//Diz quando determinado elemento está ou não presente em um array.

console.log(numeros.indexOf(4)); //Mostra o indice do elemento.
//--------------------------------------------------------//-----------------------------------------------//-------------------------
const numeros3 = [1, 2, 3, 4, 5, 6, 8];
//A função splice altera o array original.
numeros3.splice(1, 2); //Retira elementos: o primeiro número indica o indice e o segundo o número de elementos que se deseja excluir.
console.log(numeros3);
//A função pop também altera o array original.
console.log(numeros3.pop()); //Remove o último elemento do array.
console.log(numeros3);
//--------------------------------------//--------------------------------------------//----------------------------//-----------------
const numeros4 = [1, 2, 10, 12, 13];
function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros4.forEach(praCadaElemento); //Pode passar uma função para o forEach.

numeros4.forEach(function () {
    console.log('forEach');
})