const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.5,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto); //Objeto referenciando a si mesmo.
    }
}

console.log(produto.nome);
console.log(produto.precoComDesconto()); //Método que pertence ao produto.
//---------------------------------------------//-----------------------------------------------------//------------------------------
const data = {
    dia: 1,
    mes: 10,
    ano: 2021
};
//Atributos internos do objeto sendo modificados.
data.dia = 24;
data.mes = 12;
console.log(`${data.dia}/${data.mes}/${data.ano}`);
//----------------------------------------------//--------------------------------------------//-------------------------------------
const usuario = {
    email: 'aluno@cod3r.com.br'
}

usuario.nome = 'Aluno';
usuario.senha = '1232456';

console.log(usuario.email);
console.log(usuario.nome);
console.log(usuario);
//------------------------------------//------------------------------------------------//-------------------------------//------------
//Definindo um objeto mais rico em atributos:
const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            {nome: 'Hospital X', muitoProximo: true},
            {nome: 'Shopping Y', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1].muitoProximo);