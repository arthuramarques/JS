// Atribuindo variável para dar sentido aos valores literais
let preco = 19.90;
let desconto = 0.4;   

// O parenteses modifica a ordem das operações
console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// Atribuição de variáveis com nomes (string --> sequencia de simbolos) e concatenação (juntar um texto ao outro)
let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome 
+ ", Categoria: " + categoria
+ ", Preço: " + preco
+ ", Desconto: " + desconto); 

console.log (preco + desconto);

//Dicas: sempre pensar em um bom nome.