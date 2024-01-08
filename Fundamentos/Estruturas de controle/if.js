//Experimentando com valores literais
if (true)
    console.log("Vai ser executado"); //Espaço indica que há uma subordinação da sentença de código à estrutura de controle.

if (false)
    console.log("Não vai ser executado");

console.log("FIM!");
//---------------------------------------//-------------------------------------//----------------------------------------//----------
const nota = 8;
const bomComportamento = false;

if (nota >= 7 && bomComportamento)
    console.log("Parabéns!");

if (nota < 7 || !bomComportamento)
    console.log("Uma pena");

console.log("FIM");
//-------------------------------------------------------//-------------------------------------------//-------------------------------
const nota1 = 10;

if (nota1 >= 9) { //Essa estrutura age sobre a próxima coisa (sentença, bloco ou estrutura) que aparecer no código.
    console.log('Quadro de honra!');
    console.log('Parabéns');
}
console.log("Fim!");
// Não colocar ponto e vírgula, pois definiria uma sentença de código e a estrutura agiria sobre a sentença vazia.