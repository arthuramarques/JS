//-----Passando uma função como parametro-------//-----------------------//---------------------------------//------------------------
function executar (funcao) { //Para ser executado, o conteudo de funcao deverá ser uma function.
    if (typeof funcao === 'function') { //Forma de saber se o que foi passado para a variável funcao é uma function.
        console.log(funcao());
    }
}
function bomDia () {
    return ('Bom dia!');
}

executar(3);
executar(bomDia()); //Não irá imprimir nada no console, porque se está passando o 'Bom dia' como parâmetro. 
executar(bomDia);
//-------------------------------------------------------------//-------------------------------------//--------------------------------
function efetuar (fn, n1, n2) { //Tirando números de maneira flexível.
    if (typeof fn === 'function') {
        console.log(fn(n1, n2));
    }
}
function somar (a, b) {
    return a + b;
}
function boaTarde () {
    return 'Boa tarde!';
}
function subtrair (a, b) {
    return a - b;
}
function multiplicar (a, b) {
    return a * b;
}
efetuar (somar, 50, 40);
efetuar(subtrair, 60, 70);
efetuar (multiplicar, 80, 90);
console.log(boaTarde(10,20,30)); //Exemplo de que parâmetros adicionais serão ignorados.