const nota1 = 3.2;
const nota2 = 3.1;
const nota3 = 3.2;

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
console.log(mediaDasNotas());