const { texto, arquivos } = require('./base');

// * (opcionais) 0 u n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} {quantas vezes no minimo, quantas vezes no maximo}
// {10} quantidade específica

// const regExp1 = /Jo+ão+/gi;

// console.log(texto);
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe{0,}g/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    //if (!valido) return 

    console.log(arquivo, valido)
};