//Estrutura for: declaração de variável; expressão e incremento
for(let controle = 1; controle <= 10; controle += 2) { 
    console.log(controle);
}
console.log('Fim');
//--------------------------//-----------------------------//--------------------------//------------------------------------------------
/* Formas de se gerar laços infinitos com a estrutura fo: 
for(;;) {
}
 for(; true; ){
}*/
//As partes não são obrigatórias. É possível estruturar o for de modo semelhante ao while, porém com algumas modificações.
let controle1 = 1;
for (; controle1 <= 10;) {
    console.log(controle1);
    controle++;
}
console.log('Fim!');
//-------------------------------------//------------------------------------------//-------------------------------------//------------
//O 'i' (index) em geral é usado com a estrutura for.
//Como executar passo a passo. 
for ( let index = 7; index >= 3; index -= 1 ) {
    console.log(index);
}
console.log('FIM!');
//--------------------------------------------//---------------------------------//----------------------------------------//---------
// [1,1], [1,2], [1,3]
// [2,1], [2,2], [2,3]
// [3,1], [3,2], [3,3]

for (let i = 1; i <= 3; i++) {
    let linha = '';
    console.log(i);
    for(let j = 1; j <=3; j ++) {
        linha += `[${i}, ${j}]`;
        console.log(j);
    }
}