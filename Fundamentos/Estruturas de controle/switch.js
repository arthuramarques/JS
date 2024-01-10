let nota = 10.1;

switch (Math.ceil(nota)) { //Função Math.ceil() arredonda para o menor valor inteiro acima.
    case 10: //No caso de cases com a mesma funcionalidade, é possível colocá-los na sequência.  
    case 9:
    case 8:
        console.log('Parabéns!');
        break; //Para executar apenas um case, é preciso o uso da sentença break. 
    case 7: case 6: case 5: //Também é possível organizar dessa maneira.
        console.log('Recuperação!');
        break;
    case 4:
    case 3:
    case 2:
        console.log('Reprovado!');
        break;
    case 1:
    case 0:
        console.log('Muito Reprovado!');
        break;
    default:
        console.log('Nota inválida!');
}

console.log('Fim!');