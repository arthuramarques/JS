//const nota1 = 3.2;
//const nota2 = 3.1;
//const nota3 = 3.2;

function mediaDasNotas () {
    return (nota1 + nota3)/2
}

function statusAluno () {
    if (mediaDasNotas <= 10 && mediaDasNotas() >= 7) {
        return 'Aprovado!';
    } else if (mediaDasNotas() >= 4 && mediaDasNotas() < 7) {
        return 'Em Recuperação!';
    } else {
        return 'Reprovado';
    }
}
console.log (`O status do aluno é ${statusAluno()}`);
//Observações: faltou desenvolver uma maneira de comparar as três notas.
//-----------------------------------//--------------Resposta-------------//----------------------------//--------------------------
const nota1 = 3.2;
const nota2 = 3.1;
const nota3 = 3.2;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media (n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));
    if (menorNota === n1) {
        return (n2 + n3)/2;
    } else if (menorNota === n2) {
        return (n1 + n3)/2;
    } else {
        return (n1 + n2)/2;
    }
}

function mediaParaStatus (media) {
    if (media >= 7) {
        return 'Aprovado!';
    } else if (media >=4 && media <= 7) {
        return 'Em Recuperação';
    } else {
        return 'Reprovado!';
    }
}
const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}`);