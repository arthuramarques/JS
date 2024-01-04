// a linguagem JS compara os conteúdos e não os tipos 
let a = 1;
let b = "1";
let c = "1";

console.log(a ==b);

// comparação estrita: interessa saber se os conteúdos e os tipos são iguais ou diferentes
console.log(a === b); // igualdade estrita
console.log(a != b);
console.log(a !== b); // diferença estrita 

// usa-se a comparação estrita com maior recorrência em virtude de uma maior segurança ao código