const numeros = [1, 2, 3];
const produto = {
    nome: 'Caneta', 
    preco: 9.99,
    desconto: 0.2
};
//paralelo com o array
console.log(numeros[0]);
console.log(produto['nome']);
console.log(produto['preco']);
console.log(produto['desconto']);
//como é usualmente utilizado
console.log(produto.nome); 
console.log(produto.preco);
console.log(produto.desconto);
//console.log(Array.isArray(y)); --> mostra se determinada variável é um array.