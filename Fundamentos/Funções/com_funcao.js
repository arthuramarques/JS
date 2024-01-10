const d1 = 3;
const m1 = 7; 
const a1 = 2021; 
//Função pode ser pensada como sendo um bloco de código com nome. 
function exibirData1() { //Pode usar o underline para nomear a função.
console.log(`${d1}/${m1}/${a1}`);
}
const d2 = 23;
const m2 = 12; 
const a2 = 2022;

function exibirData2() {
    console.log(`${d2}-${m2}-${a2}`);
}
//Pode ser chamada quantas vezes se desejar.
exibirData1();
exibirData1();
exibirData1();
exibirData2();
exibirData2();
exibirData2();
//-----------------------//-----------------------------------------//------------------------------
//Passando dados para dentro da função.
function exibirData (d, m, a) { //Associar função a ação.
    console.log(`${d}-${m}-${a}`);
}
exibirData(d1, m1, a1);
exibirData(d2, m2, a2);