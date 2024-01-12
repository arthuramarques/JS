function retornaUmaFuncao() {
    function bomDia() {
        return 'Boa dia!!';
    }
    return bomDia;
}
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());

const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao());
//---------------------------------//-----------------------------------------//----------------------------------------//--------------
//Retornando uma função anônima.
function retornaMaisUmaFuncao() {
    return function () {
        return 'Boa tarde';
    }
}
console.log(retornaMaisUmaFuncao);
console.log(retornaMaisUmaFuncao());
console.log(retornaMaisUmaFuncao()());
//-------------------------------------//----------------------------------------------//------------------------------------//--------
/*Currying: processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna
outra função.*/
function somar1(a, b) {
    return a + b;
}
console.log(somar1(5, 4));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}
console.log(somar2(5)(4));
//Aplicabilidade (Mais associado ao paradigma funcional).
const somarMais10 = somar2(10);
console.log(somarMais10(5));
console.log(somarMais10(15));