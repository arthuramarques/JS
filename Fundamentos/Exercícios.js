//01
function cumprimentar (nome) {
      return console.log(`Olá, ${nome}`);

};

cumprimentar('Maria');
cumprimentar('Leonardo');
//---------------------------------------------//----------------------------------//-----------------------------------//----------
//02
console.log('\n');

function converterIdadeEmAnosParaDias (idade) {
    return console.log(365 * idade);
}
converterIdadeEmAnosParaDias(25);
converterIdadeEmAnosParaDias(70);
//------------------------//-----------------------//-----------------------//-------------------------------//------------------------
//03
console.log('\n');

function calcularSalario (horasTrabalhadas, valorPorHora) {
    return console.log (`Salário igual a ${horasTrabalhadas * valorPorHora}`);
}
calcularSalario(150, 40.5);
//------------------------//-----------------------//-----------------------//-------------------------------//------------------------
//04
console.log('\n');

let mes = [,'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
function nomeDoMes (i) {
    return console.log(mes[i]);
};
nomeDoMes (1);
//--------------------------------------//-------------------------------------------//---------------------------------//--------------
//05
console.log('\n');
function maiorOuIgual (num1, num2) {
    if (typeof num1 === typeof num2) {
        return console.log(num1 >= num2);
    } else {
     return (console.log(false));
    } 
}
maiorOuIgual(0, 0)
maiorOuIgual(0, "0") 
maiorOuIgual(5, 1)
//----------------------------------------//---------------------------------------------------//-------------------------------//-----
//06
console.log('\n');

function inverso (valor) {
    if (typeof valor === 'number' ) {
        return console.log(-(valor));
    } else if (typeof valor === 'boolean') {
        return console.log(!valor);
    } else {
        console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
    }
 }    
inverso(true) 
inverso("6") 
inverso(-2000) 
inverso("programação")
//---------------------------------------//--------------------------------//--------------------------//-----------------------------
//07
console.log('\n');

function estaEntre (numero, maximo, minimo, inclusivo = false) {
    if (inclusivo == true) {
        return console.log(numero >= minimo && numero <= maximo);
    } else {
        return console.log(numero > minimo && numero < maximo);
    }
}
estaEntre(90, 100, 50) 
estaEntre(16, 100, 160) 
estaEntre(3, 150, 3) 
estaEntre(3, 150, 3, true)
//---------------------------------//----------------------------//----------------------------//---------------------//---------------
//08
console.log('\n');

function multiplicar (num1, num2) {
  let resultado = 0
    for(let vezes = 1; vezes <= num2; vezes++) {
   resultado += num1;
   }

return console.log(resultado)
}

multiplicar(5, 5)
multiplicar(0, 7)
//---------------------------------//-----------------------------------//------------------------------------//------------------------7
//09
console.log('\n');

function repetir (elementoQueRepete, vezesDeRepeticao) {
    let saida = [];
    for(let i = 1; i <= vezesDeRepeticao; i++) {
        saida.push(elementoQueRepete);
    }
    return console.log(saida);
}
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
//---------------------------//---------------------------//---------------------------//------------------------------//--------------
//10
console.log('\n');

function simboloMais(num) {
    let linha = '';
    for (let i = 1; i <= num; i++) {
        linha += '+';
    }
console.log(linha);
}
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
//-----------------------------------//----------------------------------//---------------------------------//-------------------------
//11
console.log('\n');

function receberPrimeiroEUltimoElemento (array) {
    primeiroEUltimo = [array[0], array[array.length - 1]]
    return console.log (primeiroEUltimo);
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
//----------------------------//-------------------------------------//-----------------------------------------//--------------------
//12
console.log('\n');

function removerPropriedade (objeto, propriedade) {
    delete objeto [propriedade];
    return console.log(objeto);
}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
//-----------------------------------------//----------------------------------------//----------------------------------//-----------
//13
console.log('\n');

function filtrarNumeros (array) {
 let saida = [];
    for (let vetor of array) {
    if (typeof vetor === 'number') {
        saida.push(vetor);
    }
 } return console.log(saida);
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a",2,"c", 'd', 'f', 'g']) // retornará []
//----------------------------//-------------------------------------//---------------------------------------------//------------------
//14
console.log('\n');

function objetoParaArray (objeto) {
    let saida = [];
    for (let item in objeto) {
     saida.push([item, objeto[item]]);     
    } 
    return console.log(saida);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
    //--------------------------------------------//-------------------------------------------//-----------------------------------------//-------
    //15
 console.log('\n');
    
 function receberSomenteOsParesDeIndicesPares (array) {
     let saida = [];
     for (let i in array) {
            if (i % 2 === 0) {
                if (array[i] % 2 === 0) {
                    saida.push(array[i]);
                }
            }
    } return console.log(saida);
}
    receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
//--------------------------------------------------//----------------------------------------------------//-----------------------------------------
//16
console.log('\n');

function checarAnoBissexto (numero) {
    if (numero % 100 == 0) {
        if (numero % 400 == 0) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    } else {
        if (numero % 4 == 0) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
//-------------------------------------------//-------------------------------------------------//----------------------------------------------------//------------
//17
console.log('\n'); 

function somarNumeros (array) {
    let saida = 0;
    for (let elemento of array ) {
     saida += elemento;
    } 
    return console.log(saida);
 } 


somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
//--------------------------------------------------------//------------------------------------------//-----------------------------------------------------///----------------
//18
console.log('\n'); 

function despesasTotais (array) {
    let despesas = 0;  
    for (let elemento of array) {    
    for (let item in elemento) {
        objeto = elemento[item];
        if (typeof objeto === typeof 0) {
            despesas += objeto;
        }
    }
    } return console.log(despesas);
    }
despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99
    despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89
//---------------------------------------------//-------------------------------------//------------------------------------------------------------------//------------
//19
console.log('\n'); 

function calcularMedia (array) {
    let soma = 0;
    for (let elementos of array) {
        soma += elementos;
    }
    let media = soma/array.length;
return console.log(media);
}
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
//---------------------------------------------------//----------------------------------------------//------------------------------------------------//------------------
//20
console.log('\n'); 

function areaDoTriangulo (base, altura) {
    let area = (base * altura)/2;
    return console.log(area.toFixed(2));

}

areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59
//----------------------------------------------------//----------------------------------------------//-------------------------------------------------------//------------