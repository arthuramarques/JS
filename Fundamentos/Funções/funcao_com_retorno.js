//Exemplo de função que retorna sempre um valor fixo.
function sempreRetornaUm() {
    return 1;
    console.log('FIM') //Não executará nada após o return.
}

function textoOuNumero(retornaTexto) {
    //   return retornaTexto ? 'Sou um texto!' : 123;    
    if (retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}
let valor = sempreRetornaUm() + 9999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false)); //É possível colocar diretamente a função no console.log.