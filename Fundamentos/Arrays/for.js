//Percorrendo os elementos de um array.
const numeros = [1, 2, 3, 356, 5, 6, 11];

for(let i =0; i < numeros.length; i++) { //Percorrendo todos os elementos.
    console.log(numeros[i]);
}

for(let i =0; i < numeros.length; i+=2) { //Pulando elementos.
    console.log(numeros[i]);
}
//-----------------------------------//------------------------------------------------//----------------------------------//---------
const notas = [7, 8, 3, 5, 10, 9, 8, 8];
let valores = '';
//foreach ('percorra cada um')
for(let nota of notas) { //for of acessa os elementos.
    valores += nota + ' ';
}
console.log(valores);
//Percorrendo os índices do array.
let indices = '';
for (let indice in notas) { //for in acessa o índice.
    indices += indice + ' ';
}
console.log(indices);