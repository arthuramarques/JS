//Data (dia/mes/ano)
//Metodo exibir -> retorna uma string "dia/mes/ano"

const data = {
    dia: 2,
    mes: 10,
    ano: 2005,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
console.log(data.exibir()); 