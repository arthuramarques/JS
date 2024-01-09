while (true) {
    console.log('Laço infinito!');
}
console.log('Exec... Cntrl + Alt + N');
console.log('Parar....Cntrl + Alt + M');

//------------------------//-----------------------------------//-------------------------------------------//-----------------------
console.log (Math.random());//Escolhe um número aleatório entre 0 e 1
let quantidade = 0;
// Indeterminada de repetições
while (Math.random() < 0.87) { //Enquanto for verdadeira, o bloco será executado.
    quantidade++;
}
console.log('Qtde: ' + quantidade);
//-----------------------------//-------------------------------//-------------------------------//------------------------------//----
console.log(Date.now()); //Mostra a qtde de milisegundos desde 1º de janeiro de 1970. 

const futuro = Date.now() + 2000;
let quantidade1 = 0;

while (Date.now() < futuro) {
    quantidade1++
}
console.log('Qtde: ' + quantidade1);
//-------------------------------//---------------------------------//--------------------------------------------//---------------------
//Gerar uma quantidade determinada de repetições.
let controle = 1; //Variável que auxilia no controle do laço.
while(controle <= 10) { 
    console.log(controle);
    controle++; //Lógica que modificasse a variável de controle.
}
console.log('Fim');
//Declaração, expressão e incremento -> Qtde. determinada!