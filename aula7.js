const {cpfs2, cpfs} = require('./base');

// ^ -> começa com
// $ -> termina com
// [^] -> negação
// m - multiline

const cpf = '254.224.877-45';
const cpfExpReg =/^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2)
console.log(cpfs2.match(cpfExpReg))
