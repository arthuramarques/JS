//Duplicação de código (deve ser evitada).
const d1 = {
    dia: 2,
    mes: 10,
    ano: 2005,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const d2 = {
    dia: 4,
    mes: 9,
    ano: 2022,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d3 = {
    dia: 5,
    mes: 12,
    ano: 2020,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
//---------------------------------------//-------------------------------------//----------------------------------------------------
//Solução 1 -> colocando um objeto dentro de uma função. 
function criarData (dia, mes, ano) {
    return {
        dia: dia,
        mes: mes, 
        ano: ano,
        exibir: function () {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    };
}

const d4 = criarData(9, 10, 2020);
const d5 = criarData(22, 11, 2023); 
const d6 = criarData (3, 4, 2022); 

console.log(d4.exibir());
console.log(d5.exibir());
console.log(d6.exibir());
//------------------------------------------------//-------------------------------------------------//-------------------------------
//Solução 2 (simplificações)
function criarData (dia, mes, ano) {
    return {
        dia,
        mes, 
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    };
}

const d7 = criarData(9, 10, 2020);
const d8 = criarData(22, 11, 2023); 
const d9 = criarData (3, 4, 2022); 

console.log(d7.exibir());
console.log(d8.exibir());
console.log(d9.exibir());
//---------------------------------------------//------------------------------------------------------//-----------------------------
//Função construtora (classe) --> será responsável por construir um objeto.
function Data (dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
const d0= new Data();

const d12= new Data(24, 12, 2022);
const d13= new Data(31, 12, 2021);

console.log(d0.exibir());
console.log(d12.exibir());
console.log(d13.exibir());
console.log(typeof d0);

console.log(d0);
console.log(d12);